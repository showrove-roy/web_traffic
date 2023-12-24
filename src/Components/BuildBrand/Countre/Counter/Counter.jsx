import CountUp from "react-countup";

export const Counter = () => {
  return (
    <section className='mt-0 brandSectionBG2 maxW1280'>
      <div className='md:py-14 py-10 flex flex-col items-center justify-center'>
        <div className='flex gap-10 flex-col md:flex-row'>
          <div className='w-full max-w-xs min-h-[10rem] lg:px-14 px-8 bg-[#fff9f9] rounded-3xl flex flex-col justify-center'>
            <p className='text-blue text-center lg:text-4xl md:text-2xl text-xl font-semibold'>
              <CountUp end={5} />+
            </p>
            <p className='text-center lg:text-xl md:text-lg text-base font-semibold'>
              Years Of
              <span className='text-blue text-center'> Experience</span>
            </p>
          </div>
          <div className='w-full max-w-xs min-h-[10rem] lg:px-14 px-8 bg-[#fff9f9] rounded-3xl flex flex-col justify-center'>
            <p className='text-blue text-center lg:text-4xl md:text-2xl text-xl font-semibold'>
              <CountUp end={100} />+
            </p>
            <p className='text-center lg:text-xl md:text-lg text-base font-semibold'>
              Happy <span className='text-blue text-center'> Clients</span>
            </p>
          </div>
          <div className='w-full max-w-xs min-h-[10rem] py-10 lg:px-14 px-8 bg-[#fff9f9] rounded-3xl flex flex-col justify-center'>
            <p className='text-blue text-center lg:text-4xl md:text-2xl text-xl font-semibold'>
              <CountUp end={24} />|<CountUp end={7} />
            </p>
            <p className='text-center lg:text-xl md:text-lg text-base font-semibold'>
              Years Of
              <span className='text-blue text-center'> Online Support</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
