import { Documentary } from "./Documentary";
import { HeroSlider } from "./HeroSlider";

export const Home = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSlider />
      <section className='bg-[#F9FCFD] maxW1600 py-10'>
        {/* Documentary section */}
        <Documentary />
      </section>
    </>
  );
};
