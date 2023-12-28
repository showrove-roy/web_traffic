/* eslint-disable react/prop-types */
import faqSVG from "../../assets/illustration-faq.svg";
export const FaqSection = ({ faqs }) => {
  console.log("🚀 ~ file: FaqSection.jsx:3 ~ FaqSection ~ faqs:", faqs)
  return (
    <section className=' maxW1280 py-10'>
      <h2 className='text-5xl font-semibold text-black-10 text-center mt-10 mb-16'>
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
              {faqs.map((faQ,i)=><div key={i}
                tabIndex={i}
                className='collapse collapse-arrow rounded-md md:gap-3 gap-1 md:mb-5 mb-3'>
                <div className='collapse-title lg:text-xl text-base font-medium text-black faqBG after:text-[rgba(0,0,0,0.5)] '>
                 {faQ?.Question}
                </div>
                <div className='collapse-content faqBG'>
                  <p className='md:text-base text-sm text-black pt-2'>
                  {faQ?.Answer}
                  </p>
                </div>
              </div>)}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
