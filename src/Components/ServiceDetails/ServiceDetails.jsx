import { ServiceHeroSection } from "./ServiceHeroSection";
import digitalMarketing from "../../assets/ServiceSliderIMG/digital marketing.svg";
import SMM from "../../assets/Service Icon/ic_smm.svg";
import { ServiceDetailsCard } from "./ServiceDetailsCard";

export const ServiceDetails = () => {
  // hero section data
  const data = {
    id: 1,
    title: "Digital Marketing",
    subTitle:
      "Digital marketing creates opportunities for small and medium business enterprises to compete with larger business entities.",
    image: `${digitalMarketing}`,
    btnText: "Get Start",
    BtnLink: "#",
  };

  // service us data
  const serviceSData = [
    {
      id: 1,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 2,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 3,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 4,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 5,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 6,
      img: `${SMM}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
  ];
  return (
    <section className='maxW1280 '>
      {/* Hero section */}
      <div className='relative'>
        <ServiceHeroSection data={data} />
        <div className='CMNSliderBG h-32 w-full absolute left-0 bottom-0'></div>
      </div>

      {/* title  */}
      <div className=''>
        <h2 className='md:text-5xl text-3xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          Our <br className='md:hidden ' />
          <span className='text-blue'> Digital Marketing </span>{" "}
          <br className='md:hidden ' /> Services
        </h2>
      </div>

      {/* service description card */}
      <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20 gap-10 px-3 2xl:px-0'>
        {
          serviceSData.map((serviceData)=> <ServiceDetailsCard key={serviceData.id} serviceData={serviceData}></ServiceDetailsCard>)
        }
      </div>
    </section>
  );
};
