import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <>
      <footer className='footerBG pt-10 pb-8 h-full'>
        <div className='maxW1600'>
          <div className=''>
            <div className=''>
              <div className='flex flex-col w-full lg:flex-row'>
                {/* footer section 1 */}
                <div className='grid flex-grow lg:w-1/3 w-full  place-items-center'>
                  <div className=''>
                    <h3 className='text-white text-xl font-medium mb-3'>
                      Company
                    </h3>

                    <div className=''>
                      <ul className='list-disc text-white ms-5'>
                        <li>
                          <Link to='/'>About</Link>
                        </li>
                        <li>
                          <Link to='/'>Blog</Link>
                        </li>
                        <li>
                          <Link to='/'>Career</Link>
                        </li>
                        <li>
                          <Link to='/'>Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='mt-3 flex gap-2'>
                      <Link
                        to='/'
                        className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                        <FaFacebook className='text-blue text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                        <FaInstagram className='text-blue text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                        <FaLinkedinIn className='text-blue text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                        <FaPinterestP className='text-blue text-xl' />
                      </Link>
                      <Link
                        to='/'
                        className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                        <FaYoutube className='text-blue text-xl' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='divider lg:divider-horizontal opacity-50 before:bg-white after:bg-white'></div>

                {/* footer section 2 */}
                <div className='grid flex-grow lg:w-1/3 w-full place-items-center'>
                  <div className=''>
                    <h3 className='text-white text-xl font-medium mb-3'>
                      Services
                    </h3>

                    <ul className='list-disc text-white ms-5'>
                      <li>
                        <Link to='/'>Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to='/'>Graphic Design</Link>
                      </li>
                      <li>
                        <Link to='/'>Content Writing</Link>
                      </li>
                      <li>
                        <Link to='/'>Video Editing</Link>
                      </li>
                      <li>
                        <Link to='/'>Lead Generation</Link>
                      </li>
                      <li>
                        <Link to='/'>Other Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='divider lg:divider-horizontal opacity-50 before:bg-white after:bg-white'></div>

                {/* footer section 3 */}
                <div className='grid flex-grow lg:w-1/3 w-full place-items-center'>
                  <div className=''>
                    <div className='bg-white max-w-xs w-full min-h-fit rounded-3xl py-5 px-7'>
                      <h3 className='text-xl font-semibold mb-3'>Our Office</h3>
                      <div className=''>
                        <div className='flex items-center gap-5'>
                          <FaLocationDot className='text-blue text-3xl' />
                          <p className='font-medium'>
                            52 Argyle Rd Apt #1C <br /> Brooklyn New York 11218 USA
                          </p>
                        </div>
                        <div className='flex items-center gap-5 my-2'>
                          <IoMdCall className='text-blue text-xl' />
                          <p className='font-medium'>
                            1917-327-2801
                            <br />
                            1425-546-4513
                          </p>
                        </div>
                        <div className='flex items-center gap-5'>
                          <IoMdMail className='text-blue text-xl' />
                          <p className='font-medium'>hello@wtm.com </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='divider before:bg-white opacity-70 after:bg-white max-w-[1280px] w-full px-3 mx-auto'></div>
            <div className='text-center'>
              <p className='font-medium text-white'>
                © 2020-2023 Web Traffic Magnet Digital Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
