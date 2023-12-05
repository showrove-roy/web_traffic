// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import Laptop from "../../assets/Laptop.svg";
import modile from "../../assets/Mobile.svg";
import destop from "../../assets/Group 2571.svg";
import { Link } from "react-router-dom";
import Video from "../../assets/video1.mp4";
import Video2 from "../../assets/video.mp4";

export const HeroSlider = () => {
  return (
    <section className='heroBG maxW1600'>
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
              <div className='  relative w-[100%] max-w-[1200px]'>
                <img src={`${Laptop}`} className=' w-[100%]' />

                <video
                  className='  absolute  w-[68.7%] h-[85.3%] top-[13.1%] left-[13.5%] '
                  src={Video}
                  muted
                  autoPlay
                  loop
                  alt='All the devices'></video>
              </div>
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
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse md:py-20 py-10 gap-5'>
            {/* slider right & res-top */}
            <div className='lg:w-1/2 w-full  	'>
              <div className='  relative w-[100%] max-w-[1200px]'>
                <img src={`${destop}`} className=' w-[100%]' />

                <video
                  className='  absolute  w-[76.7%] h-[91.3%] top-[-1.9%] left-[11.5%] '
                  src={Video}
                  muted
                  autoPlay
                  loop
                  alt='All the devices'></video>
              </div>
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
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse md:py-20 py-10 gap-10'>
            {/* slider right & res-top */}
            <div className='lg:w-1/2 w-full  flex justify-center	'>
              <div className='  relative max-w-[1200px]'>
                <img src={`${modile}`} className=' w-[200px]' />
                <video
                  className='  absolute  w-[68.7%] h-[88.3%] top-[6.1%] left-[17.5%] '
                  src={Video2}
                  muted
                  autoPlay
                  loop
                  alt='All the devices'></video>
              </div>
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
