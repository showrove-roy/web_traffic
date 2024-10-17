import { useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ServiceDetailsCard = ({ serviceData }) => {

  return (
    // <div className='bg-[rgba(0,0,0,0.04)] max-w-[300px] h-auto rounded-3xl md:py-10 py-8 md:px-6 px-4 cursor-pointer mx-auto'>
    //   <div className='flex justify-center mb-5'>
    //     <img
    //       src={`${serviceData?.picture}`}
    //       alt=''
    //       className='fill-white object-cover w-16 h-16'
    //     />
    //   </div>
    //   <div className=''>
    //     <h4 className='text-center md:text-3xl text-2xl font-semibold my-3  '>
    //       {serviceData?.name}
    //     </h4>
    //     <p className='md:text-lg text-sm text-justify'>
    //       {serviceData?.descripton?.slice(0, Counter)}
    //       {serviceData?.descripton?.length > Counter && (
    //       <span className=''>
    //         ...
    //         <span
    //           className='font-semibold cursor-pointer hover:text-blue'
    //           onClick={() => setCounter(serviceData?.descripton?.length)}>
    //           {' '} See More
    //         </span>
    //       </span>
    //     )}
    //     </p>
       
    //   </div>
    // </div>

    <div className="w-auto  transition-opacity duration-300 ease-in-out  overflow-hidden group mt-10 ">
    <Link path={`/service/${serviceData?.id}`}
    >
  <div className=" rounded-lg relative mouse ">
    
   
    
    
   
    
    <img src={serviceData?.picture} alt="Hanging Planters" className="w-[200px] h-[200px] rounded-lg"/>
 
   <div className="absolute w-full h-full bg-black/20 top-0 left-0  hidden  group-hover:block rounded-lg">

   </div>
  </div>
 
 <p className="p-4 text-center text-black group-hover:text-blue font-normal">{serviceData?.name}</p>
 </Link>
  </div>
  );
};
