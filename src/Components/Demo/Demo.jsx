import React from 'react';
import dreams from '../../assets/ServiceSliderIMG/1 (2).png';
import { Loading } from '../Loading/Loading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Demo = () => {
    
      const { id } = useParams();
    
    
      const { isLoading, data } = useQuery({
        queryKey: ["ServiceDemo"],
        queryFn: () => axios.get(`/single-Subcategory/${id}`, {}),
      });
    
      if (isLoading) {
        return <Loading/>;
      }

     
      // const portfolios = [
      //   {
      //     id: 1,
      //     src: dreams,
      //     url:"https://hired-dream-job.vercel.app/",
      //   },
      //   {
      //     id: 2,
      //     src: dreams,
      //     url:"https://daraz-ecommarce.netlify.app/"
      //   },
      //   {
      //     id: 3,
      //     src:dreams,
      //     url:"https://omah-website.netlify.app/"
      //   },
      //   {
      //     id: 4,
      //     src: dreams,
      //     url:"https://waxxom.netlify.app/"
      //   },
      //   {
      //     id: 5,
      //     src: dreams,
      //     url:"https://hasan-natural.netlify.app/"
    
      //   },
      //   {
      //     id: 6,
      //     src: dreams,
      //     url:"https://tronix-ecommarce.netlify.app/"
      //   },
      //   {
      //     id: 7,
      //     src: dreams,
      //     url:"https://web-traffic.vercel.app/"
      //   },
      //   {
      //     id: 8,
      //     src: dreams,
      //     url:"https://hasan-adava.netlify.app/",
      //   },
      //   {
      //     id: 9,
      //     src:dreams,
      //     url:"https://doctors-protal.netlify.app/",
      //   },
      // ];



    return (
        <div
        name="portfolio"
        className="bg-gradient-to-l from-[rgb(7,7,7)] to-white w-full text-white "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of our work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            { data?.data?.data?.Service.map(({ id, image,link}) => (
              <div key={id} className=" rounded-lg ">
               <div className="h-[300px] overflow-hidden w-full">
          <Link to={link}>
          <img
                  src={image}
                  alt=""
                  className="rounded-md  hover:scale-200 h-full w-full object-cover
                object-top hover:object-bottom duration-[5000ms] "
                />
          
          </Link>
               
               </div>
                <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-200">
    {/* <a href={url} target="_blank" rel="noopener noreferrer">
      Demo
    </a> */}
  </button>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Demo;