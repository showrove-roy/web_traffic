import { BlogCard } from "../../Components/BlogCard/BlogCard";

export const BlogSection = () => {
  return (
    <section>
      <h2 className='text-5xl font-semibold text-black-10 text-center mt-10 lg:mt-24 mb-16'>
        Blogs & <span className='text-blue'>Updates</span>
      </h2>
      <BlogCard />
    </section>
  );
};
