/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export const SericeSlider = ({ banner }) => {
  return (
    <section className='maxW1280 relative md:mb-24 mb-10'>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'>
        {/*  slid map */}
        {banner?.map((data) => (
         
          <SwiperSlide key={data.id}>
            <div className='hero-content flex-col lg:flex-row-reverse md:py-10 py-5 gap-5'>
              {/* slider right & res-top */}
              <div className='lg:w-1/2 w-full'>
                <img src={`${data?.picture}`} className='lg:max-w-xl w-full' />
              </div>
              {/* slider left & res-bottom */}
              <div className='lg:w-1/2 w-full '>
                <h1 className='md:text-5xl text-2xl font-bold text-black-10 lg:text-left text-center'>
                  {data?.title}
                </h1>
                <p className='py-2 md:py-5 text-black-10 lg:text-left text-center md:text-base text-xs'>
                  {data?.descripton
                    ?.replace(/<[^>]*>?/gm, "")
                    ?.split(" ")
                    ?.join(" ")
                    ?.slice(0, 250)}
                  {data.descripton?.length >= 250 && "..."}
                </p>
                {/* slider CTA button */}
                <div className='flex sm:flex-row flex-col md:gap-8 gap-2 sm:my-5 my-2 lg:justify-start justify-center items-center '>
                  {/* slider btn 1 */}
                  <Link
                    to={`/service/${data.catagoryId}`}
                    className='py-4 px-10 bg-blue rounded-full text-white  btnShadow hover:shadow-none w-fit text-sm'>
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='CMNSliderBG h-32 w-full absolute left-0 bottom-0'></div>
    </section>
  );
};
