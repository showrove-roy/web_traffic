import { FormulaCard } from "./FormulaCard";
import ic_understand from "../../assets/Formula icon/ic_understand.svg";
import ic_plan from "../../assets/Formula icon/ic_plan.svg";
import ic_start from "../../assets/Formula icon/ic_start.svg";
import arrow1 from "../../assets/Formula icon/arrow1.svg";
import arrow2 from "../../assets/Formula icon/arrow2.svg";

export const FormulaSection = () => {
  const FormulasData = [
    {
      id: 1,
      icon: `${ic_understand}`,
      title: "Understand",
      subTitle:
        "It starts with understanding what you need. Every business is different and sometimes, a business is not even ready for marketing (and we are honest about that too if we feel that way)",
    },
    {
      id: 2,
      icon: `${ic_plan}`,
      title: "Plan",
      subTitle:
        "Once we have a solid understanding about what the business is and how you want to see your brand in consumer's minds - that's when we start planning the strategy.",
    },
    {
      id: 3,
      icon: `${ic_start}`,
      title: "Start",
      subTitle:
        "Once we have a solid understanding about what the business is and how you want to see your brand in consumer's minds - that's when we start planning the strategy.",
    },
  ];

  return (
    <section className='lg:pb-20 pb-10'>
      <h2 className='text-5xl font-semibold text-black-10 text-center mt-10 lg:mt-24 mb-16'>
        Our <span className='text-blue'>Formula</span> for Success
      </h2>

      {/* formula card */}
      <div className=''>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
          <div className=' '>
            <FormulaCard data={FormulasData[0]}></FormulaCard>
          </div>
          <div className='lg:-mb-20 rotate-45 lg:rotate-0'>
            <img src={arrow1} alt='' />
          </div>
          <div className='lg:-mb-20 '>
            <FormulaCard data={FormulasData[1]}></FormulaCard>
          </div>
          <div className='lg:-mb-40 rotate-45 lg:rotate-0 py-5'>
            <img src={arrow2} alt='' />
          </div>
          <div className='lg:-mb-40'>
            <FormulaCard data={FormulasData[2]}></FormulaCard>
          </div>
        </div>
      </div>
    </section>
  );
};
