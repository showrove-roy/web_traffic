/* eslint-disable react/prop-types */
import { useState } from "react";
import { BlueButton } from "../BlueButton/BlueButton";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ services }) => {
  
  const { id, picture, name, descripton } = services;
  return (
    
    <div className="w-auto  transition-opacity duration-300 ease-in-out  overflow-hidden  group hover:scale-105  ">

  <div className=" rounded-lg relative mouse ">
    <img src={picture} alt="Hanging Planters" className="w-[200px] h-[200px] rounded-lg"/>
 
   <div className="absolute w-full h-full bg-black/20 top-0 left-0  hidden  group-hover:block rounded-lg">

   </div>
  </div>
 
 <div className="p-4 text-center text-black group-hover:text-blue font-normal">
 <BlueButton  btnText={name} btnLink={`service/${id}`} />
 </div>
 
  </div>
 
  );
};
