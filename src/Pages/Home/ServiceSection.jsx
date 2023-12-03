import { ServiceCard } from "../../Components/ServiceCard/ServiceCard";
import Frame from "../../assets/Service Icon/Frame.svg";
import GraphicDesign from "../../assets/Service Icon/ic_graphic-design.svg";
import HandWriting from "../../assets/Service Icon/Hand Writing.svg";
import Search from "../../assets/Service Icon/seachers.svg";
import VideoEditing from "../../assets/Service Icon/ic_video-editing.svg";
import LeadGeneration from "../../assets/Service Icon/ic_lead-generation.svg";
import SMM from "../../assets/Service Icon/ic_smm.svg";
import web from "../../assets/Service Icon/web.svg";
import Other from "../../assets/Service Icon/ic_other.svg";

export const ServiceSection = () => {
  let servicesData = [
    {
      id: 1,
      icon: `${Frame}`,
      title: "Digital Marketing",
      subTitle:
        "Digital marketing creates opportunities for small and medium business enterprises to compete with larger business entities.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 2,
      icon: `${GraphicDesign}`,
      title: "Graphics Design",
      subTitle:
        "If you aren’t sure how you should proceed in promoting your brand let us analyze your business to take most effective plan.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 3,
      icon: `${HandWriting}`,
      title: "Content Writing",
      subTitle:
        "Our video editing services can help direct people to your business, build your reputation, and expand your sales.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 4,
      icon: `${Search}`,
      title: "Search Engine Optimization",
      subTitle:
        "SEO is a part of Digital marketing that help your targeted customers to find you in search engine results and take action.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 5,
      icon: `${VideoEditing}`,
      title: "Video Editing",
      subTitle:
        "Our video editing services can help direct people to your business, build your reputation, and expand your sales.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 6,
      icon: `${LeadGeneration}`,
      title: "Lead generation",
      subTitle:
        "Generate reliable and scalable lead to meet your business goals.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 7,
      icon: `${SMM}`,
      title: "Social Media Marketing",
      subTitle:
        "If you aren’t sure how you should proceed in promoting your brand let us analyze your business to take most effective plan.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 8,
      icon: `${web}`,
      title: "Web Design & Development",
      subTitle:
        "Professional web Designing is the first step to showcase your brand and convert visitors into buyers.",
      btnText: "Get Started",
      btnLink: "service",
    },
    {
      id: 9,
      icon: `${Other}`,
      title: "Other Services",
      subTitle:
        "Generate reliable and scalable lead to meet your business goals.",
      btnText: "Get Started",
      btnLink: "service",
    },
  ];
  return (
    <section>
      <h2 className='text-6xl font-semibold text-black-10 text-center mt-24 mb-16'>
        Our <span className='text-blue'>Services</span>
      </h2>
      <div className='w-full'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-10 gap-5 justify-items-center w-full'>
          {servicesData.map((serviceData) => (
            <ServiceCard key={serviceData.id} serviceData={serviceData} />
          ))}
        </div>
      </div>
    </section>
  );
};
