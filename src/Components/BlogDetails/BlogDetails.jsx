import { Link, useLoaderData } from "react-router-dom";
import Bimg1 from "../../assets/BolgsImages/Bimg1.jpg";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BlogCard } from "../BlogCard/BlogCard";
import image1 from "../../assets/BolgsImages/Bimg4.png";
import image2 from "../../assets/BolgsImages/Bimg2.png";
import image4 from "../../assets/BolgsImages/Bimg3.png";
export const BlogDetails = () => {
  const data = useLoaderData();
  console.log("🚀 ~ file: BlogDetails.jsx:10 ~ BlogDetails ~ data:", data)
  // Blogs
  const blogs = [
    {
      id: 1,
      title: "JCI Dhaka Founders Elects Nahid Hasan as 2024 ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      image: `${image1}`,
      blogLink: "#",
    },
    {
      id: 2,
      title: "Beware of scammers offering jobs on behalf of us",
      subTitle:
        "Two years ago, a scammer falsely claiming to be Dusyanthan Balasubramanian, a Bizcope employee, sent countless threatening emails ...",
      image: `${image2}`,
      blogLink: "#",
    },
    {
      id: 3,
      title: "How To Become a Creative Director (or Art Director) in ...",
      subTitle:
        "A creative/art director is one of the most influential executive positions you can achieve in a company.",
      image: `${image4}`,
      blogLink: "#",
    },
  ];
  return (
    <>
      <div className='lg:mb-52 min-[425px]:mb-52 min-[375px]:mb-36 mb-28 '>
        <div className='lg:h-[28rem] md:h-80 sm:h-60 h-48 w-full relative'>
          {/* background image*/}
          <img
            className='w-full h-full object-cover absolute '
            src={`${Bimg1}`}
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
                <img className='w-full h-full' src={`${Bimg1}`} alt='Shoes' />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Blog title section */}
      <div className='lg:max-w-4xl md:max-w-3xl max-w-xl mx-auto mb-10 px-5'>
        <h2 className='text-center text-black lg:text-5xl md:text-4xl sm:text-3xl text-xl font-semibold '>
          Pixels and Possibilities: Navigating the Impact of AI on the World of
          Photography
        </h2>

        <p className='mt-5 text-blue md:text-2xl text-xs font-medium text-center'>
          <span className='pr-1 md:pr-5'>By Robert Downey</span> |{" "}
          <span className='pl-1 md:pl-5'>November 2, 2023</span>
        </p>
      </div>

      <div className='maxW1280'>
        <div className=''>
          <p className='lg:text-2xl md:text-xl sm:text-base text-xs'>
            We’re super excited to announce that Nahid Hasan, the visionary
            founder and CEO of Bizcope has been elected as the President of JCI
            Dhaka Founders, a local chapter of JCI Bangladesh, for the year
            2024. This prestigious announcement was made during the 4th General
            Membership Meeting (GMM) and General Assembly, held at Hotel Sarina
            on 3rd November.
            <br />
            <br />
            JCI represents a dedicated network of youthful and active citizens
            who are committed to driving positive changes within their
            communities, operating in over 120 countries. Its headquarters is in
            St. Louis, Missouri, USA, and the local chapter “JCI Dhaka Founders”
            was established in 2023 to empower young professionals and
            entrepreneurs to make a difference in Bangladesh.
            <br />
            <br />
            <br />
            The new committee for the upcoming year comprises a team of
            successful founders, with M Asif Rahman as Founding President,
            Saidur Mamun Khan as Executive Vice President (EVP), and Razia
            Sultana, Ashikul Islam Tamal, and Amjad Shuvo as Vice Presidents
            (VP). The election proceedings were overseen by Fazle Munim, the
            President of BDC and a respected member of JCI Bangladesh. During
            the gathering, the organization conducted its annual general meeting
            for 2023, where Mr. M Asif M Rahman expressed appreciation for the
            current committee and members. He also conveyed his best wishes to
            Nahid Hasan’s committee.
            <br />
            <br />
            The new committee for the upcoming year comprises a team of
            successful founders, with M Asif Rahman as Founding President,
            Saidur Mamun Khan as Executive Vice President (EVP), and Razia
            Sultana, Ashikul Islam Tamal, and Amjad Shuvo as Vice Presidents
            (VP). The election proceedings were overseen by Fazle Munim, the
            President of BDC and a respected member of JCI Bangladesh.
            <br />
            <br />
            During the gathering, the organization conducted its annual general
            meeting for 2023, where Mr. M Asif M Rahman expressed appreciation
            for the current committee and members. He also conveyed his best
            wishes to Nahid Hasan’s committee.
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
            DEC, 09, 2023
          </div>
        </div>

        {/* Read next blog  */}
        <div className='mt-20 mb-10'>
          <h4 className='lg:text-4xl md:text-3xl text-2xl font-medium mb-5'>
            Read next :{" "}
          </h4>

          <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-5 lg:px-0'>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
