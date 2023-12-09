import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <>
      <div className=''>
        <h2 className='md:text-6xl text-4xl font-semibold text-black-10 text-center lg:mt-10 mt-7'>
          <span className='text-blue'>Contact</span> Us
        </h2>
      </div>

      <section className="maxW1600">
        <ContactForm></ContactForm>
      </section>
    </>
  );
};
