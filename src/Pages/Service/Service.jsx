import { CMNSlider } from "../../Components/CmnSlider/CMNSlider";
import digitalMarketing from "../../assets/ServiceSliderIMG/digital marketing.svg";
import webDesign from "../../assets/ServiceSliderIMG/Website designer.svg";
import seo from "../../assets/ServiceSliderIMG/SEO.svg";
import { ServiceSection } from "../../Components/ServiceCard/ServiceSection";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";

export const Service = () => {
  const ServiceSliderData = [
    {
      id: 1,
      title: "Digital Marketing",
      descripton:
        "Digital marketing creates opportunities for small and medium business enterprises to compete with larger business entities.",
      picture: `${digitalMarketing}`,
      btnText: "Get Start",
      BtnLink: "#",
    },
    {
      id: 2,
      title: "Web Design & Development",
      descripton:
        "Professional web Designing is the first step to showcase your brand and convert visitors into buyers.",
      picture: `${webDesign}`,
      btnText: "Get Start",
      BtnLink: "#",
    },
    {
      id: 3,
      title: "Search Engine Optimization",
      descripton:
        "SEO is a part of Digital marketing that help your targeted customers to find you in search engine results and take action.",
      picture: `${seo}`,
      btnText: "Get Start",
      BtnLink: "#",
    },
  ];
  return (
    <>
      <div className=''>
        <h2 className='md:text-6xl text-4xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Our
          <span className='text-blue'> Services</span>
        </h2>
      </div>

      {/* Slider */}
      <CMNSlider sliderData={ServiceSliderData}></CMNSlider>

      {/* Service list */}
      <ServiceSection></ServiceSection>

      {/* Build a brand Card */}
      <BuildBrand />
      {/* Get into touch */}
      <GetInTouch></GetInTouch>
    </>
  );
};
