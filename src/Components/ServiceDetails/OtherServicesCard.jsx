/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const OtherServicesCard = ({ othSer }) => {
  return (
    <Link to='#'>
      <button className='group bg-[#F0F0F0] flex gap-5 md:text-2xl text-lg font-medium text-black-10  p-5  rounded-xl mx-auto hover:scale-105 '>
        <img src={`${othSer?.picture}`} alt='' />
        {othSer?.name}
      </button>
    </Link>
  );
};
