import { ServiceHeroSection } from "./ServiceHeroSection";
import digitalMarketing from "../../assets/ServiceSliderIMG/digital marketing.svg";

export const ServiceDetails = () => {
  const data = {
    id: 1,
    title: "Digital Marketing",
    subTitle:
      "Digital marketing creates opportunities for small and medium business enterprises to compete with larger business entities.",
    image: `${digitalMarketing}`,
    btnText: "Get Start",
    BtnLink: "#",
  };
  return (
    <section className='maxW1280 relative'>
      <ServiceHeroSection data={data} />
      <div className='CMNSliderBG h-32 w-full absolute left-0 bottom-0'></div>
    </section>
  );
};
