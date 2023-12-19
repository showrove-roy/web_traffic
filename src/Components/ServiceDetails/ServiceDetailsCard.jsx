/* eslint-disable react/prop-types */
export const ServiceDetailsCard = ({ serviceData }) => {
  return (
    <div className='bg-[rgba(0,0,0,0.04)] max-w-[300px] max-h-[450px] rounded-3xl py-14 px-10 cursor-pointer mx-auto'>
      <div className='flex justify-center mb-5'>
        <img src={`${serviceData?.img}`} alt='' className='fill-white' />
      </div>
      <div className=''>
        <h4 className='text-center md:text-3xl text-2xl font-semibold my-3  '>
          {serviceData?.title}
        </h4>
        <p className='md:text-xl text-sm text-center '>
          {serviceData?.description}
        </p>
      </div>
    </div>
  );
};
