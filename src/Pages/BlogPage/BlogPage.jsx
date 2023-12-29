import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { BlueButton } from "../../Components/BlueButton/BlueButton";
import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { CMNSlider } from "../../Components/CmnSlider/CMNSlider";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../../Components/Loading/Loading";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

export const BlogPage = () => {
  const blogDatas = useLoaderData();

  // blog data load
  const { isLoading, data: allBlog } = useQuery({
    queryKey: ["allBloges"],
    queryFn: () => axios.get("/all-blog", {}),
  });

  // store blog data
  let blog;
  if (blogDatas?.data?.success) {
    blog = blogDatas?.data?.data;
  } else {
    blog = allBlog?.data?.data;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <ScrollToTop/>
      <div className=''>
        <h2 className='md:text-6xl text-4xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Marketing
          <span className='text-blue'> Blog</span>
        </h2>
      </div>
      {/* Slider */}
      <CMNSlider sliderData={blog}></CMNSlider>

      {/* blogs */}
      <div className='maxW1280 md:mt-24 mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-x-5 lg:gap-y-20 gap-y-8 '>
        {blog.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Load more button */}
      <div className='md:my-10 my-5  flex justify-center'>
        <BlueButton btnText={"Load More"} btnLink={"blog"}></BlueButton>
      </div>

      {/* Build a brand Card */}
      <BuildBrand />
      {/* Get into touch */}
      <GetInTouch />
    </>
  );
};
