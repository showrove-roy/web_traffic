import getintouch from "../../assets/get-in-touch.svg";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const GetInTouch = () => {
  return (
    <section className='maxW1280 py-10 md:mb-20 mb-10'>
      <h2 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-black-10 text-center mt-5 lg:mt-20'>
        Get In <span className='text-blue'>Touch </span>
      </h2>
      <div className=''>
        <div className='md:mt-16 mt-8'>
          <div className='flex flex-col md:flex-row-reverse justify-between gap-5 items-center'>
            <div className='md:w-1/2 w-full flex justify-center '>
              <img src={`${getintouch}`} alt='' className='max-w-md w-full' />
            </div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <div className='grid grid-cols-2 md:gap-10 gap-3'>
                {/* Address */}
                <div className='getInTouchBg md:py-7 py-5 md:px-5 px-3 max-w-[280px] max-h-[250px]'>
                  <h5 className='lg:text-3xl md:text-lg  text-black-10 font-semibold text-center'>
                    Location
                  </h5>
                  <p className='flex gap-5 items-center mt-3 md:text-lg text-xs text-black font-medium'>
                    <IoLocationOutline className='text-6xl text-blue hidden lg:block' />
                    244 E 8th St Brooklyn New York 11218 USA
                  </p>
                </div>
                {/* Contact */}
                <div className='getInTouchBg md:py-7 py-5 md:px-5 px-3 max-w-[280px] max-h-[250px]'>
                  <h5 className='lg:text-3xl md:text-lg  text-black-10 font-semibold text-center'>
                    Contact Us
                  </h5>
                  <p className='flex gap-5 items-center mt-3 md:text-lg text-xs text-black font-medium'>
                    <IoMdCall className='text-2xl text-blue hidden lg:block' />
                    1917-327-2801 <br /> 1425-546-4513
                  </p>
                  <p className='flex gap-5 items-center mt-3 lg:text-base text-sm text-black font-medium'>
                    <MdEmail className='text-2xl text-blue hidden lg:block' />
                    webtmusa@gmail.com
                  </p>
                </div>
                {/* time */}
                <div className='getInTouchBg md:py-7 py-5 md:px-5 px-3 max-w-[280px] max-h-[250px]'>
                  <h5 className='lg:text-3xl md:text-lg  text-black-10 font-semibold text-center'>
                    Our Hours
                  </h5>
                  <p className='flex gap-5 items-center mt-3 md:text-lg text-xs text-black font-medium text-center'>
                    We are open SAT-THUR 08:30 –5:00 (GMT 6+)
                  </p>
                </div>
                {/* Social */}
                <div className='getInTouchBg md:py-7 py-5 md:px-5 px-3 max-w-[280px] max-h-[250px]'>
                  <h5 className='lg:text-3xl md:text-lg  text-black-10 font-semibold text-center'>
                    Social
                  </h5>
                  <div className=''>
                    <div className='mt-3 grid grid-cols-3 gap-2 md:gap-7 justify-items-center'>
                      <Link
                      target="_blank"
                        to='https://www.facebook.com/webtmusa'
                        className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
                        <FaFacebook className='text-white text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
                        <FaInstagram className='text-white text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
                        <FaLinkedinIn className='text-white text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
                        <FaPinterestP className='text-white text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
                        <FaYoutube className='text-white text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-9 h-9 bg-blue flex justify-center items-center rounded-full'>
                        <FaXTwitter className='text-white text-xl' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
