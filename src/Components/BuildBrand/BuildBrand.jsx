import { Link } from "react-router-dom";

export const BuildBrand = () => {
  return (
    <>
      <section className=''>
        <div className='h-20 brandSectionBG maxW1280'></div>
        <div className='brandSectionBG2 md:py-14 py-10 flex flex-col items-center justify-center maxW1280'>
          <h3 className='text-white md:text-6xl text-2xl text-center font-semibold'>
            Ready To Build Your Brand?
          </h3>
          <p className='py-5 text-white lg:text-3xl md:text-lg text-[10px] font-medium'>
            YOU ARE JUST ONE STEP AWAY TO EXPERIENCE THE PROGRESS.
          </p>

          <div className=''>
            <Link to='#'>
              <button className='text-blue md:text-xl text-xs font-medium btnShadow px-12 py-5 bg-white rounded-[40px]'>
                Let’s Build Your Business
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
