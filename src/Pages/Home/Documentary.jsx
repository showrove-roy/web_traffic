import illustrationWhy from "../../assets/illustration-why.svg";
import illustrationgrow from "../../assets/illustration-grow.svg";
import { BlueButton } from "../../Components/BlueButton/BlueButton";
export const Documentary = () => {
  return (
    <>
      <section>
        {/* first card "Why" */}
        <div>
          <div className='flex flex-col md:flex-row justify-between md:gap-28 gap-5 items-center'>
            <div className='md:w-1/2 w-full flex justify-center '>
              <img
                src={`${illustrationWhy}`}
                alt=''
                className='max-w-sm w-full'
              />
            </div>
            <div className='md:w-1/2 w-full'>
              <h3 className='text-black-10 font-semibold md:text-4xl text-2xl md:text-left text-center'>
                Why <span className='text-blue'>Web Traffic Magnet</span>
              </h3>
              <p className='md:text-xl text-sm md:my-6 my-2 text-black-10 text-justify md:text-left max-w-lg md:max-w-none mx-auto'>
                The answer is simple – <strong>Web Traffic Magnet</strong> helps
                you achieve more sales and revenue from our Digital Marketing
                services. As we are in the industry for more than 05 years now
                we have grown high-level expertise in this industry.
              </p>
              <div className='mt-4 flex justify-center md:justify-start'>
                <BlueButton btnLink={"contact"} btnText={"Learn More"} />
              </div>
            </div>
          </div>
        </div>

        {/* second card "grow" */}
        <div className='md:mt-20 mt-10'>
          <div className='flex flex-col md:flex-row-reverse justify-between md:gap-28 gap-5 items-center'>
            <div className='md:w-1/2 w-full flex justify-center '>
              <img
                src={`${illustrationgrow}`}
                alt=''
                className='max-w-sm w-full'
              />
            </div>
            <div className='md:w-1/2 w-full'>
              <h3 className='text-black-10 font-semibold md:text-4xl text-2xl md:text-left text-center'>
                Grow Your Business with
                <span className='text-blue'>Our Online Marketing Services</span>
              </h3>
              <p className='md:text-xl text-sm md:my-6 my-2 text-black-10 text-justify md:text-left max-w-lg md:max-w-none mx-auto'>
                Boost your business with our proven Digital Marketing services.
                We drive traffic, convert leads, and turn customers into brand
                advocates. Web Traffic Magnet, a leading SEO service provider in
                Bangladesh, delivers consistent, impactful results for our
                clients.
              </p>
              <div className='mt-4 flex justify-center md:justify-start'>
                <BlueButton btnLink={"contact"} btnText={"Learn More"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
