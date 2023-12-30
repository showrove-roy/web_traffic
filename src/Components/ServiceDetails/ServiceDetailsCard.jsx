/* eslint-disable react/prop-types */
export const ServiceDetailsCard = ({ serviceData }) => {
  return (
    <div className='bg-[rgba(0,0,0,0.04)] max-w-[300px] max-h-[500px] h-auto rounded-3xl md:py-10 py-8 md:px-6 px-4 cursor-pointer mx-auto'>
      <div className='flex justify-center mb-5'>
        <img src={`${serviceData?.picture}`} alt='' className='fill-white' />
      </div>
      <div className=''>
        <h4 className='text-center md:text-3xl text-2xl font-semibold my-3  '>
          {serviceData?.name}
        </h4>
        <p className='md:text-xl text-sm text-center'>
          {serviceData?.descripton}
        </p>
      </div>
    </div>
  );
};
