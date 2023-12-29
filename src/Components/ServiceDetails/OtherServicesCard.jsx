/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const OtherServicesCard = ({ othSer }) => {
  return (
    <Link to={`/service/${othSer.id}`}>
      <button className='group bg-[#F0F0F0] flex justify-center items-center gap-5 md:text-xl text-sm font-medium text-black-10 p-5 rounded-xl mx-auto hover:scale-105 w-80 h-24'>
        <img src={`${othSer?.picture}`} alt='' className='w-10' />
        {othSer?.name}
      </button>
    </Link>
  );
};
