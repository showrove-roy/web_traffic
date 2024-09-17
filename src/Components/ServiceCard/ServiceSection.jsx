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

  let services = data?.data?.data;


  return (
    <div className='w-auto rounded-full outline-2 outline-blue-500/50'>
      <div className='grid lg:grid-cols-6 sm:grid-cols-2 grid-cols-2 justify-items-center align-center gap-4 outline-2 outline-blue-500/50'>
        {services?.map((services) => (
          <ServiceCard key={services?.id} services={services} />
        ))}
      </div>
    </div>
  );
};
