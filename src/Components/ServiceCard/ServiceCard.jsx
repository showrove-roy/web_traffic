import { BlueButton } from "../BlueButton/BlueButton";

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({ serviceData }) => {
  // eslint-disable-next-line react/prop-types
  const { icon, title, subTitle, btnText, btnLink } = serviceData;
  return (
    <div className='serviceCardBg rounded-3xl h-[450px] w-[300px]  p-7 '>
      <div className='flex justify-center'>
        <img src={icon} alt='' />
      </div>
      <div className=''>
        <h4 className='text-3xl text-black-10 font-semibold text-center py-5'>
          {title}
        </h4>
        <p className='text-center text-base text-[#000]'>{subTitle}</p>

        <div className='mt-10 flex justify-center '>
          <BlueButton btnLink={`${btnLink}`} btnText={`${btnText}`} />
        </div>
      </div>
    </div>
  );
};
