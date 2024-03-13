/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const BlogCard = ({ blog }) => {
  return (
    <div className='card card-compact xl:max-w-sm max-w-[350px] bg-[#EFF2F3] rounded-3xl  mx-auto sm:w-full w-60  md:h-[30rem] h-[25rem]'>
      <figure>
        <img src={`${blog?.picture}`} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title md:text-lg sm:text-base text-sm font-medium'>
          {blog?.title}
        </h2>
        <p className='md:text-base text-xs mt-2 md:h-20 h-14 text-justify'>
          {blog?.descripton
            ?.replace(/<[^>]*>?/gm, "")
            ?.split(" ")
            ?.join(" ")
            ?.slice(0, 120)}

          {blog?.descripton?.length >= 120 && "..."}
        </p>
        <div className='card-actions justify-start mt-5 mb-3'>
          <Link
            to={`/blog/${blog?.id}`}
            className='md:py-3 py-2 md:px-8 px-5 text-blue font-medium border-2 border-blue rounded-full hover:btnShadow w-fit text-sm'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
