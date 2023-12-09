import { AboutUsHero } from "./AboutUsHero";
import aboutUs from "../../assets/about-us.svg";
import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";

export const AboutUs = () => {
  return (
    <>
      {/* About us hero section */}
      <AboutUsHero />
      <section className='maxW1600 px-5'>
        {/* web traffick details */}
        <div className=' mt-10'>
          <div className='flex flex-col md:flex-row-reverse justify-between md:gap-20 gap-0 items-center'>
            <div className='md:w-2/5 w-full flex justify-center '>
              <img src={`${aboutUs}`} alt='' className='max-w-md w-full' />
            </div>
            <div className='md:w-3/5 w-full'>
              <h3 className='text-black-10 font-semibold md:text-4xl text-2xl md:text-left text-center'>
                About
                <span className='text-blue'>
                  {" "}
                  <br className='md:hidden block' />
                  Web Traffic Magnet
                </span>
              </h3>
              <p className='md:text-xl text-xs md:my-6 my-2 text-black-10 text-justify md:text-left max-w-lg md:max-w-none mx-auto'>
                Bizcope provides online marketing campaigns across the key areas
                of search engine marketing, affiliate marketing and advertising
                that help companies grow revenue. We started our official
                journey in 2010 under the name Outsource BD and began with a
                focus on small online business. After three successive business
                years in 2013, we rebranded to become Bizcope and evolved as a
                large online marketing firm. Now, we at Bizcope, provides
                various internet marketing services for small and medium-sized
                business to enterprise brands across the globe with a great rate
                of success.
              </p>
            </div>
          </div>
        </div>

        {/* web traffick card */}
        <div className='mt-24'>
          <div className='flex flex-col sm:flex-row justify-center   md:gap-20 gap-5 items-stretch'>
            {/* card 1 */}
            <div className='bg-blue max-w-lg rounded-[40px] md:px-12 px-7 md:py-7 py-5 md:mx-0 mx-auto'>
              <h4 className='text-white text-center md:text-4xl text-lg font-semibold leading-normal'>
                We Are <br /> Web Traffic Magnet
              </h4>
              <p className='text-white md:text-base text-[10px] mt-8'>
                We are the people who eat, drink, sleep and play with SE0 and
                development. We don’t do work for money, we love this work and
                that’s why we earn money. We love to work collaboratively with
                our clients to ensure that the objectives are met by our proven
                strategies.
              </p>
            </div>
            {/* card 2 */}
            <div className='bg-blue max-w-lg rounded-[40px] md:px-12 px-7 md:py-7 py-5 md:mx-0 mx-auto'>
              <h4 className='text-white text-center md:text-4xl text-lg font-semibold leading-normal'>
                How We Formed
              </h4>
              <p className='text-white md:text-base text-[10px] mt-8 pb-8'>
                When we started we had nothing more than few computers, now have
                18 members in our team. How we did it? We formed with very easy
                calculation, gradually with 1,2,3,4…..18 by satisfying over 300
                clients for SEO, SMM and Development Projects for the last six
                years.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Build a brand Card */}
     <BuildBrand/>

     {/* get in touch */}
     <GetInTouch/>
    </>
  );
};
