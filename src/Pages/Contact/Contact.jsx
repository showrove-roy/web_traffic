import { MeetUs } from "../../Components/MeetUs/MeetUs";
import { ContactForm } from "./ContactForm";

import hand from "../../assets/MeetUSIcon/biceps (1) 1.svg";
import Grow from "../../assets/MeetUSIcon/Group-1.svg";
import learning from "../../assets/MeetUSIcon/Group.svg";
import manHead from "../../assets/MeetUSIcon/Vector-1.svg";
import hart from "../../assets/MeetUSIcon/Vector-2.svg";
import finger from "../../assets/MeetUSIcon/Vector.svg";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";

export const Contact = () => {
  const meetUSData = [
    {
      id: 1,
      img: `${hand}`,
      title: "Building Strength",
      description:
        "We together build a strong relationship, which will increase the strength of our work.",
    },
    {
      id: 2,
      img: `${learning}`,
      title: "Learning On the Go",
      description:
        "It’s not only a working phase also we will learn and experience all the things together.",
    },
    {
      id: 3,
      img: `${manHead}`,
      title: "Fixing the Mindset",
      description:
        "We will fix a mindset to achieve our goal in time. We work for your dream to make it real.",
    },
    {
      id: 4,
      img: `${Grow}`,
      title: "Grow Your Rank",
      description:
        "Improving your ranking is our prior task if you choose to take our SEO service. Let us deal with Google for you.",
    },
    {
      id: 5,
      img: `${finger}`,
      title: "Positive Result",
      description:
        "Together we will achieve a positive result to set your business as a brand in the market.",
    },
    {
      id: 6,
      img: `${hart}`,
      title: "Great Heart Pace",
      description:
        "Your website is the heart of your business. We work just like a pacemaker to keep your heart healthy.",
    },
  ];
  return (
    <>
      <div className=''>
        <h2 className='md:text-6xl text-4xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          <span className='text-blue'>Contact</span> Us
        </h2>
      </div>

      <div className='relative'>
        <div className='z-10 maxW1280'>
          <ContactForm></ContactForm>
        </div>
       <div className="absolute bottom-36 left-0 w-full  -z-10">
       <div className='brandSectionBG md:h-40 h-20'></div>
        <div className='brandSectionBG2 md:h-[400px] h-[800px]'></div>
       </div>
      </div>

      <section className='maxW1280'>
        <div className='mt-20 mb-10'>
          <h2 className='md:text-6xl text-[32px] font-semibold text-black-10 text-center lg:mt-10 mt-7'>
            This Happens When You Meet
            <span className='text-blue'> Us</span>
          </h2>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-8 md:gap-y-12 gap-6'>
          {meetUSData.map((meetData) => (
            <MeetUs key={meetData.id} meetData={meetData}></MeetUs>
          ))}
        </div>

        {/* Get into touch */}
        <GetInTouch></GetInTouch>
      </section>
    </>
  );
};
