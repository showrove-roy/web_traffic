/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const BlogCard = ({blog}) => {
  return (
    <div className='card card-compact xl:max-w-sm max-w-[350px] bg-[#EFF2F3] rounded-3xl lg:rounded-[40px] mx-auto sm:w-full w-60'>
      <figure>
        <img src={`${blog?.image}`} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title  md:text-xl sm:text-base text-sm' >
          JCI Dhaka Founders Elects Nahid Hasan as 2024 ...
        </h2>
        <p className='md:text-base text-xs mt-2'>
          We’re super excited to announce that Nahid Hasan, the visionary
          founder and CEO of Bizcope has been elected as the President ...
        </p>
        <div className='card-actions justify-start mt-5 mb-3'>
          <Link
            to=''
            className='md:py-3 py-2 md:px-8 px-5 text-blue font-medium border-2 border-blue rounded-full hover:btnShadow w-fit text-sm'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
