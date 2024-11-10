
import { ChartBar, Mails, User } from "lucide-react";
import CustomCursor from "./CustomCursor";
const Marketing = () => {
    return (
        <div className=" text-white h-full lg:h-screen">
      <CustomCursor />
      <p className="text-center font-bold">Choose the best</p>
      <h1 className=" text-black-10 text-5xl lg:text-3xl text-center font-bold max-w-5xl mx-auto mt-6 mb-24">
        Empowering Businesses with{" "}
        <span className="text-blue">Digital Marketing</span>
      </h1>
      <div className="grid grid-cols-1 px-3 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
        <div
          className="bg-[#312727] rounded-tl-[30px] mt-10 transition-colors duration-500
         group rounded-br-[30px] relative"
        >
          <p className="p-8 absolute z-10 bg-[#312727] -top-10 left-10 rounded-full">
            <User className="scale-150 text-blue group-hover:text-[#facc15]" />
          </p>
          <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full group-hover:bg-black rounded-tl-[30px] rounded-br-[30px] transition-all duration-500" />
          <div className="z-10 p-8 mt-8 sticky">
            <h3 className="text-[28px] font-semibold">
              Competitive <span className="text-blue">Analysis</span>
            </h3>
            <p className="mt-3 text-lg text-white/70">
              At Website Design Valley, we understand the importance of
              competitive analysis in the dynamic world of digital marketing.
              Our process begins by thoroughly researching and analysing the
              competitive landscape specific to each client's industry.
            </p>
          </div>
        </div>
        <div
          className="bg-[#312727] mt-10 rounded-tl-[30px] transition-colors duration-500
         group rounded-br-[30px] relative"
        >
          <p className="p-8 absolute z-10 bg-[#312727] -top-10 left-10 rounded-full">
            <ChartBar className="scale-150 text-blue group-hover:text-[#facc15]" />
          </p>
          <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full group-hover:bg-black rounded-tl-[30px] rounded-br-[30px] transition-all duration-500" />
          <div className="z-10 p-8 mt-8 sticky">
            <h3 className="text-[28px] font-semibold">
              Strategic Campaign{" "}
              <span className="text-blue">Planning</span>
            </h3>
            <p className="mt-3 text-lg text-white/70">
              Our approach to Strategic Campaign Planning is driven by a deep
              understanding of our clients' business goals and target audience.
              We begin by conducting comprehensive research, and studying
              industry competitors and markets to gain valuable insights.
            </p>
          </div>
        </div>
        <div
          className="bg-[#312727] mt-10 rounded-tl-[30px] transition-colors duration-500
         group rounded-br-[30px] relative"
        >
          <p className="p-8 absolute z-10 bg-[#312727] -top-10 left-10 rounded-full">
            <Mails className="scale-150 text-blue group-hover:text-[#facc15]" />
          </p>
          <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full group-hover:bg-black rounded-tl-[30px] rounded-br-[30px] transition-all duration-500" />
          <div className="z-10 p-8 mt-8 sticky">
            <h3 className="text-[28px] font-semibold">
              Target <span className="text-blue">Audience</span>
            </h3>
            <p className="mt-3 text-lg text-white/70">
              We believe in the power of understanding our clients' target
              audience to create effective digital marketing strategies. We
              engage in thorough consultations with our clients, and listen to
              their goals, objectives, and industry-specific challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Marketing;