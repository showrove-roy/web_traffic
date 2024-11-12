/* eslint-disable no-unused-vars */
import digitalMarketing from "../../assets/ServiceSliderIMG/digital marketing.svg";
import webDesign from "../../assets/ServiceSliderIMG/Website designer.svg";
import seo from "../../assets/ServiceSliderIMG/SEO.svg";
import { ServiceSection } from "../../Components/ServiceCard/ServiceSection";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { SericeSlider } from "../../Components/SericeSlider/SericeSlider";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CustomCursor from "../CustomCursor";

export const Service = () => {
  const bannerData = useLoaderData();

  // blog data load
  const { isLoading, data } = useQuery({
    queryKey: ["banner"],
    queryFn: () => axios.get("/get-header?searchTerm", {}),
  });

  // store banner data
  let banner;
  if (bannerData?.data?.success) {
    banner = bannerData?.data?.data;
  } else {
    banner = data?.data?.data;
  }

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <div className=''>
        <h2 className='md:text-6xl text-4xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Our
          <span className='text-blue'> Services</span>
        </h2>
      </div>

      {/* Slider */}
      <SericeSlider banner={banner}></SericeSlider>

      {/* Service list */}
      <ServiceSection></ServiceSection>

      {/* Build a brand Card */}
      <BuildBrand />
      {/* Get into touch */}
      <GetInTouch></GetInTouch>
    </>
  );
};
