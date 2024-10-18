// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const HeroSlider = () => {
  const { data } = useQuery({
    queryKey: ["heroVideo"],
    queryFn: () => axios.get("/single-video/1", {}),
  });

  let heroVideo = data?.data?.data;

  return (
    <section className='heroBG maxW1280'>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'>
        {/* Slider 1 */}

        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse md:py-20 py-10 gap-5'>
            {/* slider right & res-top */}
            <div className='lg:w-1/2 w-full  	'>
              <video
                className='max-w-xl w-full mx-auto rounded-3xl aboutShadow '
                src={heroVideo?.video}
                controls
                alt='All the devices'></video>
            </div>

            {/* slider left & res-bottom */}
            <div className='lg:w-1/2 w-full '>
              <h1 className='md:text-5xl text-2xl font-bold text-[#000000] lg:text-left text-center'>
                Unlock Your Online Potential with Web Traffic Magnet
              </h1>
              <p className='py-2 md:py-5 text-black-10 lg:text-left text-center md:text-base text-xs'>
                Elevate your brand with expert strategies. Drive web traffic,
                boost engagement and position your business for success.
              </p>
              {/* slider CTA button */}
              <div className='flex sm:flex-row flex-col md:gap-8 gap-2 sm:my-5 my-2 lg:justify-start justify-center items-center '>
                {/* slider btn 1 */}
                <Link
                  to='/service'
                  className='py-4 px-10 bg-blue rounded-full text-white  btnShadow hover:shadow-none w-fit text-sm'>
                  Explore Our Services
                </Link>
                {/* slider btn 2 */}
                <Link
                  to='/contact'
                  className='py-4 px-10 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
