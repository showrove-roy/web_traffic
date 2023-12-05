import { Link } from "react-router-dom";
import Rectangle from "../../assets/Rectangle 1343.png";
export const BlogCard = () => {
  return (
    <div className='card card-compact w-96  bg-[#EFF2F3] rounded-[40px]'>
      <figure>
        <img src={Rectangle} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-2xl'>
          JCI Dhaka Founders Elects Nahid Hasan as 2024 ...
        </h2>
        <p className='text-base mt-2'>
          We’re super excited to announce that Nahid Hasan, the visionary
          founder and CEO of Bizcope has been elected as the President ...
        </p>
        <div className='card-actions justify-start mt-5 mb-3'>
          <Link
            to=''
            className='py-[15px] px-10 text-blue font-medium border-2 border-blue rounded-full hover:btnShadow w-fit text-sm'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
