import { ServiceCard } from "../../Components/ServiceCard/ServiceCard"

export const ServiceSection = () => {
  return (
    <section>
        <h2 className='text-6xl font-semibold text-black-10 text-center mt-24 mb-16'>
          Our <span className='text-blue'>Services</span>
        </h2>
        <div className="">
            <div className="">
                <ServiceCard/>
            </div>
        </div>
    </section>
  )
}
