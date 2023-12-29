/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { ServiceHeroSection } from "./ServiceHeroSection";
import digitalMarketing from "../../assets/ServiceSliderIMG/digital marketing.svg";
import SMM from "../../assets/Service Icon/ic_smm.svg";
import { ServiceDetailsCard } from "./ServiceDetailsCard";
import { FaqSection } from "../../Pages/Home/FaqSection";
import { OtherServicesSection } from "./OtherServicesSection";
import image1 from "../../assets/BolgsImages/Bimg4.png";
import image2 from "../../assets/BolgsImages/Bimg2.png";
import image4 from "../../assets/BolgsImages/Bimg3.png";
import { BlogCard } from "../BlogCard/BlogCard";
import { GetInTouch } from "../GetInTouch/GetInTouch";
import ScrollToTop from "../ScrollToTop/ScrollToTop";


export const ServiceDetails = () => {
  // hero section data
  const data = {
    id: 1,
    title: "Digital Marketing",
    subTitle:
      "Digital marketing creates opportunities for small and medium business enterprises to compete with larger business entities.",
    image: `${digitalMarketing}`,
    btnText: "Get Start",
    BtnLink: "#",
  };

  // service us data
  const serviceSData = [
    {
      id: 1,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 2,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 3,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 4,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 5,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 6,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
  ];

  // Blogs
  const blogs = [
    {
      id: 1,
      title: "JCI Dhaka Founders Elects Nahid Hasan as 2024 ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image1}`,
      blogLink: "#",
    },
    {
      id: 2,
      title: "Beware of scammers offering jobs on behalf of us",
      subTitle:
        "Two years ago, a scammer falsely claiming to be Dusyanthan Balasubramanian, a Bizcope employee, sent countless threatening emails ...",
      image: `${image2}`,
      blogLink: "#",
    },
    {
      id: 3,
      title: "How To Become a Creative Director (or Art Director) in ...",
      subTitle:
        "A creative/art director is one of the most influential executive positions you can achieve in a company.",
      image: `${image4}`,
      blogLink: "#",
    },
  ];
  return (
    <section className='maxW1280 '>
      <ScrollToTop/>
      {/* Hero section */}
      <div className='relative'>
        <ServiceHeroSection data={data} />
        <div className='CMNSliderBG h-32 w-full absolute left-0 bottom-0'></div>
      </div>

      {/* title  */}
      <div className=''>
        <h2 className='md:text-5xl text-3xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Our <br className='md:hidden ' />
          <span className='text-blue'> Digital Marketing </span>{" "}
          <br className='md:hidden ' /> Services
        </h2>
      </div>

      {/* service description card */}
      <div className='lg:my-20 my-10 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 gap-10 px-3 2xl:px-0'>
        {serviceSData.map((serviceData) => (
          <ServiceDetailsCard
            key={serviceData.id}
            serviceData={serviceData}></ServiceDetailsCard>
        ))}
      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* related service section */}
      <h2 className='md:text-5xl text-3xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
        Let's Check Other Services
      </h2>
      <div className='my-10'>
        <OtherServicesSection />
      </div>

      {/* Featured Blogs */}

      <div className='mt-32'>
        <h2 className='md:text-5xl text-3xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
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
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Get into touch */}
      <GetInTouch/>
    </section>
  );
};
