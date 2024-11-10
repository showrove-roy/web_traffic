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
import Plan from "../Plan/Plan";
import { useEffect, useState } from "react";
import WebPlan from "../Plan/WebPlan";
import VideoEditing from "../Plan/VideoEditing";
import DigitalMarketing from "../Plan/DigitalMarketing";
import Ux from "../Plan/Ux";
import Mobile from "../Plan/Mobile";
import Onboarding from "./Onboarding";
import CustomCursor from "../CustomCursor";

export const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    
      document.documentElement.setAttribute("data-theme","dark");
   
  }, []);
  return (
    <>
      {/* Hero section */}
      <ScrollToTop/>
      <HeroSlider />
      <section className='bg-[#F9FCFD] maxW1280 py-10'>
        {/* Documentary section */}
        <CustomCursor />
        <Documentary />

        {/* service section */}
        <section>
          <h2 className='lg:text-6xl md:text-4xl text-3xl font-semibold text-black-10 text-center mt-24 mb-16'>
            Our <span className='text-blue'>Services</span>
          </h2>

          <ServiceSection />
        </section>
{/* plan section */}


<section className="mx-auto">
<h2></h2>
<h2 className='lg:text-6xl md:text-4xl text-3xl font-semibold text-black-10 text-center mt-24 mb-16'>
Pick The <span className='text-blue'>plan</span> That Fits Your Needs And 
          </h2>


          <div className="mt-5 text-center ">
           <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold text-black-10 text-center mt-24 mb-16"> Budget.</h1>
          </div>
<Onboarding setCurrentStep={setCurrentStep} />
{currentStep === 1 &&<Plan></Plan> }
{currentStep === 2 &&<WebPlan></WebPlan> }
{currentStep === 3 &&<VideoEditing></VideoEditing> }
{currentStep === 4 &&<DigitalMarketing></DigitalMarketing> }
{currentStep === 5 &&<Ux></Ux> }
{currentStep === 6 && <Mobile></Mobile> }
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
                   
                    How will you tailor your services to fit our business needs?

                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                      Each business is unique, and a good digital marketing agency should customize its strategies and services to align with the specific goals, target audience, and budget of each client.
                      </p>
                    </div>
                  </div>
                  {/* Faq 3*/}
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                    <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                    
                    How do you measure the success of digital marketing campaigns?



                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                      Success metrics vary depending on the goals of the campaign but may include metrics like website traffic, conversion rates, click-through rates, engagement metrics (likes, shares, comments), return on investment , and customer lifetime value .
                      </p>
                    </div>
                  </div>

               
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                    <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                    
                    How long will it take to see results from digital marketing efforts?




                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                      The timeline for seeing results can vary depending on factors such as the competitiveness of the industry, the chosen marketing channels, the effectiveness of the strategies employed, and the (clients )budget. Generally, some results may be visible within a few weeks to months, but significant results may take several months to a year or more.

                      </p>
                    </div>
                  </div>


                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                    <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                    
                    What is your approach to search engine optimization (SEO)?





                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                      SEO is a crucial aspect of digital marketing. The agency should be able to explain its strategies for optimizing website visibility in search engine results pages (SERPs), including keyword research, on-page optimization, link building, and technical SEO.


                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                    <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                    
                    What is your pricing structure?






                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                      Pricing can vary based on the scope of services, the complexity of the project, and the level of customization required. The agency should be transparent about its pricing structure and any additional fees or expenses clients may incur.



                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                    <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                    What ongoing support and maintenance services do you offer?







                    </div>
                    <div className='collapse-content faqBG'>
                      <p className='md:text-base text-sm text-black pt-2'>
                      After the initial project is complete, clients may need ongoing support, maintenance, and updates for their digital solutions. They may ask about the agency s support packages, service-level agreements (SLAs), and response times for addressing issues




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
