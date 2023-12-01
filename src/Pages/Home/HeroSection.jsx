// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import Laptop from "../../assets/Laptop.svg";

export const HeroSection = () => {
  return (
    <section className='h-screen heroBG'>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className=' w-1/2'>
              <img
                src={`${Laptop}`}
                className='max-w-xl'
              />
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
        <SwiperSlide>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className=' w-1/2'>
              <img
                src={`${Laptop}`}
                className='max-w-xl'
              />
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
