/* eslint-disable react/prop-types */
import { useState } from "react";
import { BlueButton } from "../BlueButton/BlueButton";

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ services }) => {
  const [desCounter, setDesCounter] = useState(150);
  const { id, picture, name, descripton } = services;
  return (
    <div className='serviceCardBg rounded-3xl w-[20rem]  p-7 '>
      <div className='flex justify-center'>
        <div className="w-16 h-16">
        <img src={picture} alt={name} className="w-full h-full" />
        </div>
      </div>
      <div className='min-h-[250px]'>
        <h4 className='text-3xl text-black-10 font-semibold text-center py-5'>
          {name}
        </h4>
        <p className='text-justify text-base text-[#000]'>
          {descripton?.slice(0, desCounter)}
          {descripton?.length > desCounter && (
            <span className=''>
              ...{" "}
              <span
                className='font-medium cursor-pointer hover:text-blue'
                onClick={() => setDesCounter(descripton?.length)}>
                {" "}
                See More
              </span>
            </span>
          )}
        </p>
      </div>
      <div className='mt-10 flex justify-center '>
        <BlueButton btnLink={`service/${id}`} btnText={"Get Started"} />
      </div>
    </div>
  );
};
