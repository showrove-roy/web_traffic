// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import Laptop from "../../assets/Laptop.svg";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className='h-screen heroBG'>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse py-10 gap-5'>
            <div className=' w-1/2'>
              <img src={`${Laptop}`} className='max-w-xl' />
            </div>
            <div className='w-1/2 '>
              <h1 className='text-5xl font-bold text-black-10'>
                Unlock Your Online Potential with Web Traffic Magnet
              </h1>
              <p className='py-6 text-black-10'>
                Elevate your brand with expert strategies. Drive web traffic,
                boost engagement and position your business for success.
              </p>
              <div className='flex gap-8'>
                <Link
                  to=''
                  className='py-4 px-10 bg-blue rounded-full text-white  btnShadow hover:shadow-none'>
                  Explore Our Services
                </Link>
                <Link
                  to=''
                  className='py-4 px-10 text-blue border border-blue rounded-full hover:btnShadow'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className=' w-1/2'>
              <img src={`${Laptop}`} className='max-w-xl' />
            </div>
            <div className='w-1/2'>
              <h1 className='text-5xl font-bold'>Box Office News!</h1>
              <p className='py-6'>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className='btn btn-primary'>Get Started</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
