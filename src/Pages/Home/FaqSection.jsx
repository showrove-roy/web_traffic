import faqSVG from "../../assets/illustration-faq.svg";
export const FaqSection = () => {
  return (
    <section className='bg-[#F9FCFD] maxW1280 py-10'>
      <h2 className='text-5xl font-semibold text-black-10 text-center mt-10 lg:mt-24 mb-16'>
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
                    eample random demo question .Here is the brief demo answer
                    to the above eample random demo question.. Here is the brief
                    demo answer to the above eample random demo question.
                  </p>
                </div>
              </div>
              {/* Faq2 */}
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
                    eample random demo question .Here is the brief demo answer
                    to the above eample random demo question.. Here is the brief
                    demo answer to the above eample random demo question.
                  </p>
                </div>
              </div>
              {/* Faq 3*/}
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
                    eample random demo question .Here is the brief demo answer
                    to the above eample random demo question.. Here is the brief
                    demo answer to the above eample random demo question.
                  </p>
                </div>
              </div>
              {/* Faq 4*/}
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
                    eample random demo question .Here is the brief demo answer
                    to the above eample random demo question.. Here is the brief
                    demo answer to the above eample random demo question.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
