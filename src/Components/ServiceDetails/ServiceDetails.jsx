/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ServiceHeroSection } from "./ServiceHeroSection";
import { ServiceDetailsCard } from "./ServiceDetailsCard";
import { FaqSection } from "../../Pages/Home/FaqSection";
import { OtherServicesSection } from "./OtherServicesSection";
import { GetInTouch } from "../GetInTouch/GetInTouch";
import { useLoaderData, useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { FeaturedBlogCard } from "../FeaturedBlogCard/FeaturedBlogCard";

export const ServiceDetails = () => {
  const { id } = useParams();
  const serviceData = useLoaderData();

  const { isLoading, data } = useQuery({
    queryKey: ["singleService"],
    queryFn: () => axios.get(`/single-category/${id}`, {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let services 
  // store Service data
  if (serviceData?.data?.success) {
    services = serviceData?.data?.data;
  } else {
    services = data?.data?.data;
  }

  return (
    <section className='maxW1280 '>
      <ScrollToTop/>
      {/* Hero section */}
      <div className='relative'>
        <ServiceHeroSection Header={services.Header} />
        <div className='CMNSliderBG h-32 w-full absolute left-0 bottom-0 -z-10'></div>
      </div>

      {/* title  */}
      <div className=''>
        <h2 className='lg:text-5xl md:text-4xl text-xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Our <br className='md:hidden ' />
          <span className='text-blue'> {services?.name} </span>
          <br className='md:hidden ' /> Services
        </h2>
      </div>

      {/* service description card */}
      <div className='lg:my-20 my-10 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 gap-10 px-3 2xl:px-0'>
        {services?.SubCatagory?.map((serviceData) => (
          <ServiceDetailsCard
            key={serviceData.id}
            serviceData={serviceData}></ServiceDetailsCard>
        ))}
      </div>

      {/* FAQ Section */}
      <FaqSection faqs={services?.CatagoryFaq} />

      {/* related service section */}
      <h2 className='lg:text-5xl md:text-4xl text-xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
        Let's Check Other Services
      </h2>
      <div className='my-10'>
        <OtherServicesSection id={services?.id} />
      </div>

      {/* Featured Blogs */}

      <div className='mt-32'>
        <h2 className='lg:text-5xl md:text-4xl text-xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Featured Blogs on
          <span className='text-blue'> Digital Marketing </span>
        </h2>
      </div>

      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className='mySwiper'>
          {services?.CatagoryBlogs?.map((blog, i) => (
            <SwiperSlide key={i}>
              <FeaturedBlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Get into touch */}
      <GetInTouch />
    </section>
  );
};