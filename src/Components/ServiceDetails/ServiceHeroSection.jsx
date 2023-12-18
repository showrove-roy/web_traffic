/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ServiceHeroSection = ({ data }) => {
  return (
    <div className='hero-content flex-col lg:flex-row-reverse md:py-10 py-5 gap-5'>
      {/* slider right & res-top */}
      <div className='lg:w-1/2 w-full'>
        <img src={`${data?.image}`} className='lg:max-w-xl w-full' />
      </div>
      {/* slider left & res-bottom */}
      <div className='lg:w-1/2 w-full '>
        <h1 className='md:text-5xl text-2xl font-bold text-black-10 lg:text-left text-center'>
          {data?.title}
        </h1>
        <p className='py-2 md:py-5 text-black-10 lg:text-left text-center md:text-base text-xs'>
          {data?.subTitle}
        </p>
        {/* slider CTA button */}
        <div className='flex sm:flex-row flex-col md:gap-8 gap-2 sm:my-5 my-2 lg:justify-start justify-center items-center '>
          {/* slider btn 1 */}
          <Link
            to={`/${data?.BtnLink}`}
            className='py-4 px-10 bg-blue rounded-full text-white  btnShadow hover:shadow-none w-fit text-sm'>
            {data?.btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};
