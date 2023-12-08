import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
  const Menu = (
    <>
      <li className='px-4'>
        <Link to='/' className='text-black-10 font-semibold'>
          Home
        </Link>
      </li>
      <li className='px-4'>
        <Link to='/about' className='text-black-10 font-semibold'>
          About
        </Link>
      </li>
      <li className='px-4'>
        <Link to='/' className='text-black-10 font-semibold'>
          Services
        </Link>
      </li>
      <li className='px-4'>
        <Link to='/' className='text-black-10 font-semibold'>
          Blog
        </Link>
      </li>
      <li className='bg-blue py-[15px] px-[50px] rounded-full cursor-pointer btnShadow'>
        <Link to='/' className='text-white font-semibold'>
          Contacts
        </Link>
      </li>
    </>
  );
  return (
    <nav className='bg-white bg-opacity-30 flex items-center'>
      <div className='maxW1600'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <div className='w-40'>
              <Link>
                <img src={`${Logo}`} className='md:w-full w-2/3' alt='logo' />
              </Link>
            </div>
          </div>
          <div className=''>
            <div className='md:hidden block'>
              <div className='flex items-center justify-end'>
                <FiMenu
                  className='text-3xl text-blue cursor-pointer'
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                />
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='flex items-center h-full justify-end'>
                <div className=''>
                  <ul className='flex justify-between items-center'>{Menu}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar menu models */}
      <dialog id='my_modal_5' className='modal modal-top md:hidden'>
        <div className='modal-box max-h-none bg-white h-full p-3 rounded-none'>
          <div className='modal-action mt-0'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className=''>
                <IoClose className='text-3xl text-blue cursor-pointer' />
              </button>
            </form>
          </div>
          <div className='my-10'>
            <ul className='flex justify-between items-center flex-col gap-y-3'>
              {Menu}
            </ul>
          </div>
        </div>
      </dialog>
    </nav>
  );
};
