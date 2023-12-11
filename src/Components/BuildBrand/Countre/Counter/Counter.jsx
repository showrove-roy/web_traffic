import CountUp from 'react-countup';




export const Counter = () => {
  return (
    <section className='mt-0'>
      <div className='h-20 brandSectionBG'></div>
      <div className='brandSectionBG2 md:py-14 py-10 flex flex-col items-center justify-center'>
        
        
      
   <div className="md:flex gap-10">
   <div className="w-[228px] h-[129px] bg-[#fff9f9] rounded">
    <p className="text-[#3391FF] text-center  font-[48px] text-[48px]"><CountUp  end={10} />+</p>
    <p className="text-center text-2xl">Years Of <span className='text-[#3391FF] text-center'>Experience</span></p>

</div>
   <div className="w-[228px] h-[129px] bg-[#fff9f9] rounded">
    <p className="text-[#3391FF] text-center mt-10 text-2xl"><CountUp end={100}/>+</p>
    <p className="text-center text-2xl">Happy  <span className='text-[#3391FF] text-center'>Clients</span></p>

</div>
   <div className="w-[228px] h-[129px] bg-[#fff9f9] rounded">
    <p className="text-[#3391FF] text-center mt-10 font-[48px]"><CountUp end={24}/>|<CountUp end={7}/></p>
    <p className="text-center text-2xl">Years Of <span className='text-[#3391FF] text-center'>Online Support</span></p>

</div>

   </div>
   </div>
    </section>
  );
};