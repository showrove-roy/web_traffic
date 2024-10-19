import { FaAngleRight } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

function Plan() {
  return (
    <div className="mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="w-full border-2 border-blue p-5 rounded-lg hover:scale-110 transition-transform duration-300">
        <h3 className="text-center text-3xl font-bold">Logo Special</h3>
        <h1 className="text-5xl text-center font-bold text-[#1e1e1e] my-5">
          $99.00 <span className="text-3xl text-stroke stroke-1">$25.00</span>
        </h1>
        <div className="flex items-center text-xl gap-2">
          <FaAngleRight /> Plan Includes:
        </div>
        <ul className="max-h-72 overflow-y-auto my-5 item space-y-1">
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>4 Original Logo Concepts</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>2 Dedicated Logo Designer</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>4 Revisionse</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>With Grey Scale Format </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Free Icon Design</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Formats: JPEG Only</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>24-48 Business Hours Turn Around Time</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Satisfaction</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Ownership Rights</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Money Back Guarantee</span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Dedicated Account Manager</span>
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
        <h3 className="text-center text-3xl font-bold">Logo Plus
        </h3>
        <h1 className="text-5xl text-center font-bold text-[#1e1e1e] my-5">
          $115.00 <span className="text-3xl text-stroke stroke-1">$250.00</span>
        </h1>
        <div className="flex items-center text-xl gap-2">
          <FaAngleRight /> Plan Includes:
        </div>
        <ul className="max-h-72 overflow-y-auto my-5 item space-y-1">
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>12 Original Logo Concepts
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>4 Dedicated Logo Designer (Industry Specific)
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Unlimited Revisions
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Stationery Design (Business Card, Letterhead, Envelope)
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Email Signature Design
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>With Grey Scale Format
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Free Icon Design
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>24 - 48 Business Hours Turn Around Time
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Satisfaction
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Ownership Rights
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Money Back Guarantee
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Dedicated Account Manager
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>24/7 Support (Email, Chat, Call, SMS, Whatsapp)
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
        <h3 className="text-center text-3xl font-bold">Logo Platinum
        </h3>
        <h1 className="text-5xl text-center font-bold text-[#1e1e1e] my-5">
          $295.00 <span className="text-3xl text-stroke stroke-1">$570.00</span>
        </h1>
        <div className="flex items-center text-xl gap-2">
          <FaAngleRight /> Plan Includes:
        </div>
        <ul className="max-h-72 overflow-y-auto my-5 item space-y-1">
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Unlimited Original Logo Concepts
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>8 Dedicated Logo Designer (Industry Specific)
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Unlimited Revisions
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Stationery Design (Business Card, Letterhead, Envelope)
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>500 Business Cards
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Email Signature Design
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>With Grey Scale Format
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Free Icon Design
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>24 - 48 Business Hours Turn Around Time
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>100% Ownership Rights
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Money Back Guarantee
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>Dedicated Account Manager
            </span>
          </li>
          <li className="flex items-center gap-1">
            <IoCheckmark />
            <span>24/7 Support (Email, Chat, Call, SMS, Whatsapp)
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
export default Plan;