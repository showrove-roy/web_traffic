import Video from "../../assets/video1.mp4";

export const AboutUsHero = () => {
  return (
    <div>
      <div className=''>
        <h2 className='md:text-6xl text-4xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          <span className='text-blue'>About</span> Us
        </h2>

        <p className='md:text-lg text-xs md:text-center text-justify px-3 text-black max-w-4xl mx-auto py-5'>
          When we started 11 years ago, it was the Nahid Hasan and a small team.
          We were desperate, dedicated, and keen to learn new things to prove
          ourselves. It grew even bigger in the last couple of years that goes
          beyond 60 years of cumulative experience.
        </p>
      </div>
      <div className='relative md:mt-20 mt-10'>
        <div className='brandSectionBG md:h-40 h-20'></div>
        <div className='w-full absolute md:-top-10 -top-5 left-1/2 -translate-x-1/2 px-5'>
          <video
            className='max-w-xl w-full mx-auto rounded-3xl aboutShadow '
            src={Video}
            controls
            alt='All the devices'></video>
        </div>



        <div className='brandSectionBG2 md:h-40 h-20'></div>
      </div>
    </div>
  );
};
