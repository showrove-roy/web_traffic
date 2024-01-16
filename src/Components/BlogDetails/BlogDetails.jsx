/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BlogCard } from "../BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../Loading/Loading";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
export const BlogDetails = () => {
  const { id } = useParams();
  const blogDatas = useLoaderData();

  // blog data load
  const { isLoading, data: singleB } = useQuery({
    queryKey: ["singleBlog"],
    queryFn: () => axios.get(`/single-blog/${id}`, {}),
  });

  

  // store blog data
  let blog;
  if (blogDatas?.data?.success) {
    blog = blogDatas?.data?.data;
  } else {
    blog = singleB?.data?.data;
  }

  // single service data load
  const { isLoading: loading, data: allBlog } = useQuery({
    queryKey: ["allBlog"],
    queryFn: () => axios.get("/all-blog", {}),
  });

  // filter next to read blogs
  let allBlogs = allBlog?.data?.data;
  const readNextBlog = allBlogs?.filter((idx) => {
    return idx.id != blog?.id;
  });

  // convert time
  const originalTimestamp = `${blog?.createdAt}`;
  const formattedDate = new Date(originalTimestamp).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }
  );

  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ScrollToTop />
      <div className='lg:mb-52 min-[425px]:mb-52 min-[375px]:mb-36 mb-28 '>
        <div className='lg:h-[28rem] md:h-80 sm:h-60 h-48 w-full relative'>
          {/* background image*/}
          <img
            className='w-full h-full object-cover absolute '
            src={`${blog?.picture}`}
            alt=''
          />
          <div className='absolute w-full h-full bg-blue opacity-80'></div>
          <div className='absolute w-full lg:mt-14 md:mt-8 mt-5 '>
            <h1 className='text-white lg:text-7xl md:text-3xl text-2xl font-semibold text-center '>
              Web Traffic Magnet
            </h1>
          </div>

          {/* card */}
          <div className='absolute lg:-bottom-[45%] -bottom-1/3 mt-14  left-1/2 -translate-x-1/2 w-full h-full px-5 mx-auto'>
            <div className='card lg:max-w-2xl max-w-md max-h-96 shadow-xl image-full w-full mx-auto'>
              <figure>
                <img
                  className='w-full h-full'
                  src={`${blog?.picture}`}
                  alt='Shoes'
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Blog title section */}
      <div className='lg:max-w-4xl md:max-w-3xl max-w-xl mx-auto mb-10 px-5'>
        <h2 className='text-center text-black lg:text-5xl md:text-4xl sm:text-3xl text-xl font-semibold '>
          {blog?.title}
        </h2>

        <p className='mt-5 text-blue md:text-2xl text-xs font-medium text-center'>
          <span className='pl-1 md:pl-5'>{formattedDate}</span>
        </p>
      </div>

      <div className='maxW1280'>
        <div className=''>
          <p className='lg:text-2xl md:text-xl sm:text-base text-xs'>
            {blog?.descripton
              ?.replace(/<[^>]*>?/gm, "")
              ?.split(" ")
              ?.join(" ")}
          </p>
        </div>
        {/* divider */}
        <div className='divider before:bg-[#D9D9D9] after:bg-[#D9D9D9] max-w-[1280px] w-full py-5 mx-auto'></div>

        {/* Blog share option  */}
        <div className='md:px-5 flex justify-between items-center'>
          <div className='flex gap-3'>
            <Link
              to='/'
              className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
              <FaFacebook className='text-white text-xl' />
            </Link>
            <Link
              to='/'
              className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
              <FaLinkedinIn className='text-white text-xl' />
            </Link>
          </div>
          <div className='faqBG text-[#263238] font-medium md:px-12 px-8 md:py-4 py-3 rounded-xl'>
            {formattedDate}
          </div>
        </div>

        {/* Read next blog  */}
        <div className='mt-20 mb-10'>
          <h4 className='lg:text-4xl md:text-3xl text-2xl font-medium mb-5'>
            Read next :
          </h4>

          <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-5 lg:px-0'>
            {readNextBlog?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
