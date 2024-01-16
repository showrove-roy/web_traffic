import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "../../Components/Loading/Loading";
import { useState } from "react";
import Grow from "./Grow";
export const Documentary = () => {
  const [desCounter, setDesCounter] = useState(150);
  const { isLoading, data: why } = useQuery({
    queryKey: ["whyWeb"],
    queryFn: () => axios.get("/single-web/2", {}),
  });

 

  let whyWeb = why?.data?.data;


  if (isLoading ) {
    return <Loading />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks

 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  return (
    <>
      <section>
        {/* first card "Why" */}
        {
          whyWeb && <div>
          <div className='flex flex-col md:flex-row justify-between md:gap-28 gap-5 items-center'>
            <div className='md:w-1/2 w-full flex justify-center '>
              <img src={whyWeb?.image} alt='' className='max-w-sm w-full' />
            </div>
            <div className='md:w-1/2 w-full'>
              <h3 className='text-black-10 font-semibold md:text-4xl text-2xl md:text-left text-center'>
                Why <span className='text-blue'>Web Traffic Magnet</span>
              </h3>
              <p className='md:text-xl text-sm md:my-6 my-2 text-black-10 text-justify md:text-left max-w-lg md:max-w-none mx-auto flex'>
              {whyWeb.titel?.slice(0, desCounter)}
         </p> {whyWeb.titel?.length > desCounter && (
            <span className=''>
              
              <span
                className='font-medium cursor-pointer hover:text-blue block'
                onClick={() => setDesCounter(whyWeb.titel?.length)}>
                {" "}
                See More
              </span>
            </span>
          )}

            </div>
          </div>
        </div>
        }

        {/* second card "grow" */}
       

<Grow/>
       
      </section>
    </>
  );
};
