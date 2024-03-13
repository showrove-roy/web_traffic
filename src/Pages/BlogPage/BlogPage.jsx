import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { CMNSlider } from "../../Components/CmnSlider/CMNSlider";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../../Components/Loading/Loading";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { useState } from "react";

export const BlogPage = () => {
  const blogDatas = useLoaderData();
  const [numOfData, setNumOfData] = useState(9);

  // blog data load
  const { isLoading, data: allBlog } = useQuery({
    queryKey: ["allBloges"],
    queryFn: () => axios.get("/all-blog", {}),
  });

  // store blog data
  let blogs;
  if (blogDatas?.data?.success) {
    blogs = blogDatas?.data?.data;
  } else {
    blogs = allBlog?.data?.data;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <ScrollToTop />
      <div className=''>
        <h2 className='md:text-6xl text-4xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Marketing
          <span className='text-blue'> Blog</span>
        </h2>
      </div>
      {/* Slider */}
      <CMNSlider sliderData={blogs}></CMNSlider>

      {/* blogs */}
      <div className='maxW1280 md:mt-24 mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-x-5 lg:gap-y-20 gap-y-8 '>
        {blogs?.slice(0, numOfData)?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {blogs?.length >= numOfData && (
        <div className='flex justify-center mb-20 mt-20'>
          <button
            onClick={() => setNumOfData(numOfData + 3)}
            className='py-3 px-8 text-blue border-2 font-medium border-blue rounded-full hover:btnShadow w-fit text-sm'>
            Load More
          </button>
        </div>
      )}

      {/* Build a brand Card */}
      <BuildBrand />
      {/* Get into touch */}
      <GetInTouch />
    </>
  );
};
