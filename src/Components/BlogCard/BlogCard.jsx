/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const BlogCard = ({blog}) => {
  return (
    <div className='card card-compact max-w-sm bg-[#EFF2F3] rounded-[40px] mx-auto'>
      <figure>
        <img src={`${blog?.cardImage}`} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title md:text-2xl text-base'>
          JCI Dhaka Founders Elects Nahid Hasan as 2024 ...
        </h2>
        <p className='md:text-base text-sm mt-2'>
          We’re super excited to announce that Nahid Hasan, the visionary
          founder and CEO of Bizcope has been elected as the President ...
        </p>
        <div className='card-actions justify-start mt-5 mb-3'>
          <Link
            to=''
            className='md:py-[15px] py-[10px] md:px-10 px-6 text-blue font-medium border-2 border-blue rounded-full hover:btnShadow w-fit text-sm'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
