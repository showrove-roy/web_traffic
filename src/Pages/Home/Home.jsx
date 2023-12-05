import { Documentary } from "./Documentary";
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
        <FormulaSection/>
      </section>
    </>
  );
};
