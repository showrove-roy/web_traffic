import { Link } from "react-router-dom";

export const BuildBrand = () => {
  return (
    <section className=''>
      <div className='h-20 brandSectionBG'></div>
      <div className='brandSectionBG2 py-14 flex flex-col items-center justify-center'>
        <h3 className="text-white text-6xl font-semibold">Ready To Build Your Brand?</h3>
        <p className="py-5 text-white text-3xl font-medium">YOU ARE JUST ONE STEP AWAY TO EXPERIENCE THE PROGRESS.</p>

        <div className=''>
          <Link to='#'>
            <button className='text-blue text-xl font-medium btnShadow px-12 py-5 bg-white rounded-[40px]'>
              Let’s Build Your Business
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
