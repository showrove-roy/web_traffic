import { BuildBrand } from "../../Components/BuildBrand/BuildBrand";
import { GetInTouch } from "../../Components/GetInTouch/GetInTouch";
import { BlogSection } from "./BlogSection";
import { Documentary } from "./Documentary";
import { FaqSection } from "./FaqSection";
import { FormulaSection } from "./FormulaSection";
import { HeroSlider } from "./HeroSlider";
import { ServiceSection } from "./ServiceSection";

export const Home = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSlider />
      <section className='bg-[#F9FCFD] maxW1600 py-10'>
        {/* Documentary section */}
        <Documentary />

        {/* service section */}
        <ServiceSection />

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
