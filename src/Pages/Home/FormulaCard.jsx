// eslint-disable-next-line react/prop-types
export const FormulaCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { icon, title, subTitle } = data;
  return (
    <div className='bg-[#EFF2F3] rounded-3xl max-w-[18rem] min-h-[25rem] px-3 py-8'>
      <div className='flex justify-center'>
        <img src={icon} alt='' />
      </div>
      <div className=''>
        <h4 className='text-3xl text-black-10 font-semibold text-center py-5'>
          {title}
        </h4>
        <p className='text-center text-base text-[#000]'>{subTitle}</p>
      </div>
    </div>
  );
};
