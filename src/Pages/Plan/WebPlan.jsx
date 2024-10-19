import { FaAngleRight } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

function WebPlan() {
  return (
    <div className="mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="w-full border-2 border-blue p-5 rounded-lg hover:scale-110 transition-transform duration-300">
        <h3 className="text-center text-3xl font-bold">Startup Website</h3>
        <h1 className="text-5xl text-center font-bold text-[#1e1e1e] my-5">
          $249.00 <span className="text-3xl text-stroke stroke-1">$470.00</span>
        </h1>
        <div className="flex items-center text-xl gap-2 my-5">
          <FaAngleRight /> Plan Includes:
        </div>
        <ul className="max-h-72 overflow-y-auto my-5 item space-y-1">
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>5 Page Website</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Custom Layout Design</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Contact/Query Form</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>3 Banner Designs </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>5 Stock Photos</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>FREE Favicon Design</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>FREE Google Friendly Sitemap</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Unlimited Revisions</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete W3C Certified HTML</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Website Initial Concepts in 48 Hours</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete Design & Deployment</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete Source Files</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Dedicated Project Manager</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Ownership Rights</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Satisfaction Guarantee</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Money Back Guarantee</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Value Added Services</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>CMS will be additional $149 *</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Mobile Responsive will be additional $199</span>
          </li>
       
        </ul>
        <div className="flex items-center justify-around">
          <Link to='/contact'className="px-8 py-3 rounded-md border border-black hover:bg-[#3d84e7] hover:text-white transition-colors duration-300 cursor-pointer">
            Chat Now
          </Link>
          <Link to='/contact'className="px-8 py-3 rounded-md border border-black hover:bg-[#3f9de5] hover:text-white transition-colors duration-300 cursor-pointer">
            Order Now
          </Link>
        </div>
        <p className="mt-4 text-center">
          Suitable for newly formed organizations or small incubated startups
        </p>
      </div>

      
      <div className="w-full border-2 border-blue p-5 rounded-lg hover:scale-110 transition-transform duration-300">
        <h3 className="text-center text-3xl font-bold">Professional Website</h3>
        <h1 className="text-5xl text-center font-bold text-[#1e1e1e] my-5">
        $699.00  <span className="text-3xl text-stroke stroke-1">$1299.00 </span>
        </h1>
        <div className="flex items-center text-xl gap-2">
          <FaAngleRight /> Plan Includes:
        </div>
        <ul className="max-h-72 overflow-y-auto my-5 item space-y-1">
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Up to 10 Unique Pages Website
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>CMS /Admin Panel Integration
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>5+ Stock Photos & Banner Designs
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>FREE Social Media Integration
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>FREE Favicon Design
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>FREE Google Friendly Sitemap
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Unlimited Revisions
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Cross Browser Compatible
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete W3C Certified HTML
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Website Initial Concepts in 48 Hours
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete Design & Deployment
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Custom, Interactive & Dynamic Web Design
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Industry specified Team of Expert Designers and Developers</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete Source Files
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Dedicated Project Manager
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Ownership Rights

            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Satisfaction Guarantee

            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Money Back Guarantee


            </span>
          </li>
          
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Value Added Services



            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>CMS will be additional $149 *




            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Mobile Responsive will be additional $199 *




            </span>
          </li>
        </ul>
        <div className="flex items-center justify-around">
          <Link to='/contact'className="px-8 py-3 rounded-md border border-black hover:bg-[#1e1e1e] hover:text-white transition-colors duration-300 cursor-pointer">
            Chat Now
          </Link>
          <Link to='/contact'className="px-8 py-3 rounded-md border border-black hover:bg-[#1e1e1e] hover:text-white transition-colors duration-300 cursor-pointer">
            Order Now
          </Link>
        </div>
        <p className="mt-4 text-center">
          Suitable for newly formed organizations or small incubated startups
        </p>
      </div>
      <div className="w-full border-2 border-blue p-5 rounded-lg hover:scale-110 transition-transform duration-300">
        <h3 className="text-center text-3xl font-bold">Elite Website
        </h3>
        <h1 className="text-5xl text-center font-bold text-[#1e1e1e] my-5">
          $999.00 <span className="text-3xl text-stroke stroke-1">$1699.00</span>
        </h1>
        <div className="flex items-center text-xl gap-2">
          <FaAngleRight /> Plan Includes:
        </div>
        <ul className="max-h-72 overflow-y-auto my-5 item space-y-1">
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Up to 15 Unique Pages Website
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Custom Made, Interactive & Dynamic Design
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Customized WordPress or js Development
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Interactive Sliding Banners
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Up to 10 Custom Made Banner Designs
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>10 Stock Images
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Unlimited Revisions
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Content Management System
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Online Signup Area (For Newsletters, Offers etc.)
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Search Bar
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Live Feeds of Social Networks integration (Optional)
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Google Friendly Sitemap
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Search Engine Submission
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Cross Browser Compatible
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete W3C Certified HTML
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Industry specified Team of Expert Designers and Developers

            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete Deployment

            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Complete Source Files

            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Dedicated Project Manager

            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Ownership Rights


            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Satisfaction Guarantee


            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Money Back Guarantee


            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>CMS will be additional $149 *


            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Mobile Responsive will be additional $199 *


            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>*NO MONTHLY OR ANY HIDDEN FEE*



            </span>
          </li>
        </ul>
        <div className="flex items-center justify-around">
          <Link to='/contact'className="px-8 py-3 rounded-md border border-black hover:bg-[#1e1e1e] hover:text-white transition-colors duration-300 cursor-pointer">
            Chat Now
          </Link>
          <Link to='/contact'className="px-8 py-3 rounded-md border border-black hover:bg-[#1e1e1e] hover:text-white transition-colors duration-300 cursor-pointer">
            Order Now
          </Link>
        </div>
        <p className="mt-4 text-center">
          Suitable for newly formed organizations or small incubated startups
        </p>
      </div>
      
    </div>
  );
}
export default WebPlan;