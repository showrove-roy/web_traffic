import { ServiceCard } from "../../Components/ServiceCard/ServiceCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../Loading/Loading";

export const ServiceSection = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["allServices"],
    queryFn: () => axios.get("/all-category", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let services = data.data.data;


  return (
    <div className='w-full maxW1280'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-items-center w-full'>
        {services.map((services) => (
          <ServiceCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};
