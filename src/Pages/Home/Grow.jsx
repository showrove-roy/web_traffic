import  { useState } from 'react';
import  axios  from 'axios';
import { Loading } from '../../Components/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const Grow = () => {
    const[ show,setShow]=useState(150)
    const { isLoading: load, data: grow } = useQuery({
        queryKey: ["grow"],
        queryFn: () => axios.get("/single-grow/2", {}),
      });
      let growWeb = grow?.data?.data;
      if (load) {
        return <Loading />;
      }
    return (
        <div className='md:mt-20 mt-10'>
<div className='flex flex-col md:flex-row-reverse justify-between md:gap-28 gap-5 items-center'>
  <div className='md:w-1/2 w-full flex justify-center '>
    <img src={growWeb?.image} alt='' className='max-w-sm w-full' />
  </div>
  <div className='md:w-1/2 w-full'>
    <h3 className='text-black-10 font-semibold md:text-4xl text-2xl md:text-left text-center'>
      Grow Your Business with
      <span className='text-blue'>
        {" "}
        Our Online Marketing Services
      </span>
    </h3>
    <p className='md:text-xl text-sm md:my-6 my-2 text-black-10 text-justify md:text-left max-w-lg md:max-w-none mx-auto'>
    {growWeb?.titel?.slice(0, show)}
    </p>

    {growWeb?.titel?.length > show && (
  <span className=''>
    
    <span
      className='font-medium cursor-pointer hover:text-blue block'
      onClick={() => setShow(growWeb?.titel?.length)}>
      {" "}
      See More
    </span>
  </span>
)}
  </div>
</div>
</div>
    );
};

export default Grow;