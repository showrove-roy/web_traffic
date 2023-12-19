import { OtherServicesCard } from "./OtherServicesCard";

export const OtherServicesSection = () => {
  return <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-10 gap-5 mx-auto">
    <OtherServicesCard/>
    <OtherServicesCard/>
    <OtherServicesCard/>
    <OtherServicesCard/>
    <OtherServicesCard/>
  </div>;
};
