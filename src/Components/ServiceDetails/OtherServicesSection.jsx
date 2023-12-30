/* eslint-disable react/prop-types */
import axios from "axios";
import { Loading } from "../Loading/Loading";
import { OtherServicesCard } from "./OtherServicesCard";
import { useQuery } from "@tanstack/react-query";

export const OtherServicesSection = ({ id }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["getAll Service"],
    queryFn: () => axios.get("/all-category", {}),
  });

  if (isLoading) {
    return <Loading />;
  }

  let services = data.data.data;

  const otherServices = services?.filter((idx) => {
    return idx.id != id;
  });

  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-10 gap-5 mx-auto'>
      {otherServices.slice(0, 6)?.map((othSer) => (
        <OtherServicesCard key={othSer.id} othSer={othSer} />
      ))}
    </div>
  );
};
