import Bimg1 from "../../assets/BolgsImages/Bimg1.jpg";
export const BlogDetails = () => {
  return (
    <>
      <div className='lg:mb-56 min-[425px]:mb-52 min-[375px]:mb-36 mb-28 '>
        <div className='lg:h-[28rem] md:h-80 sm:h-60 h-48 w-full relative'>
          {/* background image*/}
          <img
            className='w-full h-full object-cover absolute '
            src={`${Bimg1}`}
            alt=''
          />
          <div className='absolute w-full h-full bg-blue opacity-80'></div>
          <div className='absolute w-full lg:mt-14 md:mt-8 mt-5 '>
            <h1 className='text-white lg:text-7xl md:text-3xl text-2xl font-semibold text-center '>
              Web Traffic Magnet
            </h1>
          </div>

          {/* card */}
          <div className='absolute lg:-bottom-[45%] -bottom-1/3 mt-14  left-1/2 -translate-x-1/2 w-full h-full px-5 mx-auto'>
            <div className='card lg:max-w-2xl max-w-md max-h-96 shadow-xl image-full w-full mx-auto'>
              <figure>
                <img className='w-full h-full' src={`${Bimg1}`} alt='Shoes' />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
