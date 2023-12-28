/* eslint-disable react/prop-types */
import { BlueButton } from "../BlueButton/BlueButton";

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ services }) => {
console.log(services);
  const {id, picture, name, descripton } = services;
  return (
    <div className='serviceCardBg rounded-3xl h-[450px] w-[300px]  p-7 '>
      <div className='flex justify-center'>
        <img src={picture} alt='' />
      </div>
      <div className=''>
        <h4 className='text-3xl text-black-10 font-semibold text-center py-5'>
          {name}
        </h4>
        <p className='text-center text-base text-[#000]'>{descripton}</p>

        <div className='mt-10 flex justify-center '>
          <BlueButton btnLink={`service/${id}`} btnText={"Get Started"} />
        </div>
      </div>
    </div>
  );
};
