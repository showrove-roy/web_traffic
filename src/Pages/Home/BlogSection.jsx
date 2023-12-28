// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { Loading } from "../../Components/Loading/Loading";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const BlogSection = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () => axios.get("/all-blog", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let allBlogs = data.data.data;

  return (
    <section>
      <h2 className='text-5xl font-semibold text-black-10 text-center pt-10 lg:pt-24 pb-16'>
        Blogs & <span className='text-blue'>Updates</span>
      </h2>

      <div className=''>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className='mySwiper'>
          {allBlogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
