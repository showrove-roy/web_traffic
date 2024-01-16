/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ServiceHeroSection = ({ Header }) => {
  return (
    <div className='hero-content flex-col lg:flex-row-reverse md:py-10 py-5 gap-5 z-10'>
      {/* slider right & res-top */}
      <div className='lg:w-1/2 w-full'>
        <img src={`${Header[0]?.picture}`} className='lg:max-w-xl w-full' />
      </div>
      {/* slider left & res-bottom */}
      <div className='lg:w-1/2 w-full '>
        <h1 className='md:text-5xl text-2xl font-bold text-black-10 lg:text-left text-center'>
          {Header[0]?.title}
        </h1>
        <p className='py-2 md:py-5 text-black-10 lg:text-left text-center md:text-base text-xs'>
          {Header[0]?.descripton}
        </p>
        {/* slider CTA button */}
        <div className='flex sm:flex-row flex-col md:gap-8 gap-2 sm:my-5 my-2 lg:justify-start justify-center items-center '>
          {/* slider btn 1 */}
          <Link
            to='/contact'
            className='py-4 px-10 bg-blue rounded-full text-white btnShadow hover:shadow-none w-fit text-sm'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
