/* eslint-disable react/prop-types */
export const MeetUs = ({ meetDada }) => {
  return (
    <div className='bg-[rgba(0,0,0,0.04)] max-w-[405px] max-h-[350px] rounded-3xl py-14 px-10'>
      <div className='flex justify-center mb-5'>
        <img src={`${meetDada?.img}`} alt='' />
      </div>
      <div className=''>
        <h4 className='text-center md:text-3xl text-2xl font-semibold my-3 text-black '>
        {meetDada?.title}
        </h4>
        <p className='md:text-xl text-sm text-center '>
          {meetDada?.description}
        </p>
      </div>
    </div>
  );
};
