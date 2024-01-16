import { useState } from "react";

/* eslint-disable react/prop-types */
export const ServiceDetailsCard = ({ serviceData }) => {



  const [Counter, setCounter] = useState(100)
  return (
    <div className='bg-[rgba(0,0,0,0.04)] max-w-[300px] max-h-[500px] h-auto rounded-3xl md:py-10 py-8 md:px-6 px-4 cursor-pointer mx-auto'>
      <div className='flex justify-center mb-5'>
        <img src={`${serviceData?.picture}`} alt='' className='fill-white object-cover w-16 h-16' />
      </div>
      <div className=''>
        <h4 className='text-center md:text-3xl text-2xl font-semibold my-3  '>
          {serviceData?.name}
        </h4>
        <p className='md:text-lg text-sm text-center p-5'>
       
          {serviceData?.descripton?.slice(0, Counter)}
        </p>{serviceData?.descripton?.length > Counter && (
            <span className=''>
              
              <span
                className='font-medium cursor-pointer hover:text-blue block text-center'
                onClick={() => setCounter(serviceData?.descripton?.length)}>
                {" "}
                See More
              </span>
            </span>
          )}
      </div>
    </div>
  );
};
