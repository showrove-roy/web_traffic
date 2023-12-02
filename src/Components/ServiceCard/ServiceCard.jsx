import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BlueButton } from "../BlueButton/BlueButton";

export const ServiceCard = () => {
  return (
    <div className='serviceCardBg rounded-3xl h-[450px] w-[300px]  p-7 '>
      <div className='flex justify-center'>
        <HiOutlineSpeakerphone className='text-6xl text-center text-blue' />
      </div>
      <div className=''>
        <h4 className='text-3xl text-black-10 font-semibold text-center py-5'>
          Digital Marketing
        </h4>
        <p className='text-center text-base text-[#000]'>
          Digital marketing creates opportunities for small and medium business
          enterprises to compete with larger business entities.
        </p>

        <div className='mt-10 flex justify-center md:justify-start'>
          <BlueButton btnLink={"#"} btnText={"Get Started"} />
        </div>
      </div>
    </div>
  );
};
