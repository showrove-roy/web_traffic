import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";

import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { ServiceSection } from "../../Components/ServiceCard/ServiceSection";
import { BlogSection } from "./BlogSection";
import { Documentary } from "./Documentary";
import { FaqSection } from "./FaqSection";
import { FormulaSection } from "./FormulaSection";
import { HeroSlider } from "./HeroSlider";

export const Home = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSlider />
      <section className='bg-[#F9FCFD] maxW1600 py-10'>
        {/* Documentary section */}
        <Documentary />

        {/* service section */}
        <section>
          <h2 className='text-6xl font-semibold text-black-10 text-center mt-24 mb-16'>
            Our <span className='text-blue'>Services</span>
          </h2>

          <ServiceSection />
        </section>

        {/* FormulaSection */}
        <FormulaSection />

        {/* Blog section */}
        <BlogSection />
      </section>

      {/* Brand section */}
      <BuildBrand />

      {/* FAQ Section */}
      <FaqSection />

      {/* Get In Touch */}
      <section className='bg-[#F9FCFD] '>
        <GetInTouch />
      </section>
    </>
  );
};
