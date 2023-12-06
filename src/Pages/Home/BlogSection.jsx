// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { BlogCard } from "../../Components/BlogCard/BlogCard";
import image1 from "../../assets/BolgsImages/Rectangle 1343.png";
import image2 from "../../assets/BolgsImages/3654b0eb97757fb8f2f1a955b8a3b90c.png";
import image3 from "../../assets/BolgsImages/5ef99fae19a08e629e5f73477177d65e.jpg";
import image4 from "../../assets/BolgsImages/f3453abe90b0fb0639b34f1d11cfd99f.png";

export const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "JCI Dhaka Founders Elects Nahid Hasan as 2024 ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      cardImage: `${image1}`,
      blogLink: "#",
    },
    {
      id: 2,
      title: "Beware of scammers offering jobs on behalf of us",
      subTitle:
        "Two years ago, a scammer falsely claiming to be Dusyanthan Balasubramanian, a Bizcope employee, sent countless threatening emails ...",
      cardImage: `${image2}`,
      blogLink: "#",
    },
    {
      id: 3,
      title: "How To Become a Creative Director (or Art Director) in ...",
      subTitle:
        "A creative/art director is one of the most influential executive positions you can achieve in a company.",
      cardImage: `${image3}`,
      blogLink: "#",
    },
    {
      id: 4,
      title: "What a Creative Director (or Art Director) in ...",
      subTitle:
        "We’re super excited to announce that Nahid Hasan, the visionary founder and CEO of Bizcope has been elected as the President ...",
      cardImage: `${image4}`,
      blogLink: "#",
    },
  ];
  return (
    <section>
      <h2 className='text-5xl font-semibold text-black-10 text-center mt-10 lg:mt-24 mb-16'>
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
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
