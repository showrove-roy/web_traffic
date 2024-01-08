import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";
import { Counter } from "../../Components/BuildBrand/Countre/Counter/Counter";
import faqSVG from "../../assets/illustration-faq.svg";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { ServiceSection } from "../../Components/ServiceCard/ServiceSection";
import { BlogSection } from "./BlogSection";
import { Documentary } from "./Documentary";
import { FormulaSection } from "./FormulaSection";
import { HeroSlider } from "./HeroSlider";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

export const Home = () => {
  return (
    <>
      {/* Hero section */}
      <ScrollToTop/>
      <HeroSlider />
      <section className='bg-[#F9FCFD] maxW1280 py-10'>
        {/* Documentary section */}
        <Documentary />

        {/* service section */}
        <section>
          <h2 className='lg:text-6xl md:text-4xl text-3xl font-semibold text-black-10 text-center mt-24 mb-16'>
            Our <span className='text-blue'>Services</span>
          </h2>

          <ServiceSection />
        </section>

        {/* FormulaSection */}
        <FormulaSection />
      </section>

      {/* Blog section */}
      <div className='bg-[#F9FCFD] md:px-5 max-w-7xl mx-auto'>
        <BlogSection />
      </div>

      {/* Brand section */}
      <BuildBrand />
      <Counter />

      {/* FAQ Section */}
      <div className='bg-[#F9FCFD] lg:pt-14'>
        <section className=' maxW1280 py-10'>
          <h2 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-black-10 text-center mt-10 mb-16'>
            <span className='text-blue'>Frequently </span>Asked Questions
          </h2>

          <div>
            <div className='flex flex-col md:flex-row justify-between gap-5 '>
              <div className='md:w-2/5 w-full flex justify-center items-start'>
                <img src={`${faqSVG}`} alt='' className='max-w-sm w-full' />
              </div>
              <div className='md:w-3/5 w-full'>
                <div className='lg:max-w-none max-w-xl mx-auto'>
                  {/* Faq 1*/}
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                    <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                      For Example: This is a random Demo question ?
                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                        Here is the brief demo answer to the above eample random
                        demo question.Here is the brief demo answer to the above
                        eample random demo question .Here is the brief demo
                        answer to the above eample random demo question.. Here
                        is the brief demo answer to the above eample random demo
                        question.
                      </p>
                    </div>
                  </div>
                  {/* Faq 2*/}
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                    <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                      For Example: This is a random Demo question ?
                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                        Here is the brief demo answer to the above eample random
                        demo question.Here is the brief demo answer to the above
                        eample random demo question .Here is the brief demo
                        answer to the above eample random demo question.. Here
                        is the brief demo answer to the above eample random demo
                        question.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Get In Touch */}
      <section className='bg-[#F9FCFD] '>
        <GetInTouch />
      </section>
    </>
  );
};
