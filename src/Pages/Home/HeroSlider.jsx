// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import Laptop from "../../assets/Laptop.svg";
import { Link } from "react-router-dom";

export const HeroSlider = () => {
  return (
    <section className='heroBG maxW1600'>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'>
        {/* Slider 1 */}
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse md:py-20 py-10 gap-5'>
            {/* slider right & res-top */}
            <div className='lg:w-1/2 w-full'>
              <img src={`${Laptop}`} className='lg:max-w-xl w-full' />
            </div>
            {/* slider left & res-bottom */}
            <div className='lg:w-1/2 w-full '>
              <h1 className='md:text-5xl text-2xl font-bold text-black-10 lg:text-left text-center'>
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
                  to=''
                  className='py-4 px-10 bg-blue rounded-full text-white  btnShadow hover:shadow-none w-fit text-sm'>
                  Explore Our Services
                </Link>
                {/* slider btn 2 */}
                <Link
                  to=''
                  className='py-4 px-10 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider 2 */}
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse md:py-20 py-10 gap-5'>
            {/* slider right & res-top */}
            <div className='lg:w-1/2 w-full'>
              <img src={`${Laptop}`} className='lg:max-w-xl w-full' />
            </div>
            {/* slider left & res-bottom */}
            <div className='lg:w-1/2 w-full '>
              <h1 className='md:text-5xl text-2xl font-bold text-black-10 lg:text-left text-center'>
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
                  to=''
                  className='py-4 px-10 bg-blue rounded-full text-white  btnShadow hover:shadow-none w-fit text-sm'>
                  Explore Our Services
                </Link>
                {/* slider btn 2 */}
                <Link
                  to=''
                  className='py-4 px-10 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider  3*/}
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse md:py-20 py-10 gap-5'>
            {/* slider right & res-top */}
            <div className='lg:w-1/2 w-full'>
              <img src={`${Laptop}`} className='lg:max-w-xl w-full' />
            </div>
            {/* slider left & res-bottom */}
            <div className='lg:w-1/2 w-full '>
              <h1 className='md:text-5xl text-2xl font-bold text-black-10 lg:text-left text-center'>
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
                  to=''
                  className='py-4 px-10 bg-blue rounded-full text-white  btnShadow hover:shadow-none w-fit text-sm'>
                  Explore Our Services
                </Link>
                {/* slider btn 2 */}
                <Link
                  to=''
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
