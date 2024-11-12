
import { BlueButton } from './../BlueButton/BlueButton';

/* eslint-disable react/prop-types */
export const ServiceDetailsCard = ({ serviceData }) => {

  return (
  

    <div className="w-auto  transition-opacity duration-300 ease-in-out  overflow-hidden group mt-10 ">
   
  <div className=" rounded-lg relative mouse ">
    
   
    
    
   
    
    <img src={serviceData?.picture} alt="Hanging Planters" className="w-[200px] h-[200px] rounded-lg"/>
 
   <div className="absolute w-full h-full bg-black/20 top-0 left-0  hidden  group-hover:block rounded-lg">

   </div>
  </div>
 
 <div className="p-4 text-center text-black group-hover:text-blue font-normal">
 <BlueButton  btnText={serviceData?.name} btnLink={`demo/${serviceData.id}`} />
 </div>
  </div>
  );
};
