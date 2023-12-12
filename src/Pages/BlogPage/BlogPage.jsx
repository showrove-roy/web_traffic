import image1 from "../../assets/BolgsImages/Bimg4.png";
import image2 from "../../assets/BolgsImages/Bimg2.png";
import image4 from "../../assets/BolgsImages/Bimg3.png";
import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { BlueButton } from "../../Components/BlueButton/BlueButton";
import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { CMNSlider } from "../../Components/CmnSlider/CMNSlider";

export const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "JCI Dhaka Founders Elects Nahid Hasan as 2024 ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image1}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 2,
      title: "Beware of scammers offering jobs on behalf of us",
      subTitle:
        "Two years ago, a scammer falsely claiming to be Dusyanthan Balasubramanian, a Bizcope employee, sent countless threatening emails ...",
      image: `${image2}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 3,
      title: "How To Become a Creative Director (or Art Director) in ...",
      subTitle:
        "A creative/art director is one of the most influential executive positions you can achieve in a company.",
      image: `${image4}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 4,
      title: "What a Creative Director (or Art Director) in ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image4}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 5,
      title: "What a Creative Director (or Art Director) in ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image4}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 6,
      title: "What a Creative Director (or Art Director) in ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image4}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 7,
      title: "What a Creative Director (or Art Director) in ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image4}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 8,
      title: "What a Creative Director (or Art Director) in ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image4}`,
      BtnLink: "#",
      btnText: "Read More",
    },
    {
      id: 9,
      title: "What a Creative Director (or Art Director) in ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image4}`,
      BtnLink: "#",
      btnText: "Read More",
    },
  ];
  return (
    <>
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
        {blogs.map((blog) => (
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
