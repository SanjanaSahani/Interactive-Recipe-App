import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faDribbble, faBehance, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenn, setDropdownOpenn] = useState(false);

  const PagetoggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const MenutoggleDropdown = () => {
    setDropdownOpenn(!dropdownOpenn);
  };

  const search = () => {
    prompt('Search Items...');
  };

  return (
    <>
      <div className='flex flex-wrap items-center justify-between p-4 md:p-6 md:ml-[15%] md:mr-[15%]'>
        <div className='text-slate-400 text-sm font-semibold italic hover:text-green-600 w-full md:w-1/2'>
          <Typewriter
            words={['Hello World!', 'Welcome to Colorlib Family.', 'Hello Delicious!']}
            loop={10000}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="text-sm text-slate-400 ml-10 md:text-right md:float-right">
          <a className='p-4 hover:text-green-600' href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          <a className='p-4 hover:text-green-600' href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a className='p-4 hover:text-green-600' href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a className='p-4 hover:text-green-600' href="#"><FontAwesomeIcon icon={faDribbble} /></a>
          <a className='p-4 hover:text-green-600' href="#"><FontAwesomeIcon icon={faBehance} /></a>
          <a className='p-4 hover:text-green-600' href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
      <hr />
  
      <div className='flex flex-col md:flex-row md:items-center md:justify-between p-8 md:ml-[14%] md:mr-[14%]'>
        <div className="flex items-center w-32 md:w-auto">
          <a href="#"><img src="./images/logo.png" alt="logo" /></a>
          <div className="ml-4 md:hidden">
            <FontAwesomeIcon icon={faBars} onClick={MenutoggleDropdown} className="text-slate-400 cursor-pointer text-2xl absolute top-[18%] right-[8%]" />
          </div>
        </div>
        <ul className={`md:flex p-5 gap-2 ml-0 md:ml-[9%] text-slate-600 font-semibold cursor-pointer grid justify-center items-center  ${dropdownOpenn ? 'block' : 'hidden'}`}>
         <NavLink to='/' className='bg-green-600 border-b-2 border-green-800 p-2 pl-4 pr-4 text-white hover:bg-green-700'>
            HOME
          </NavLink>
          <li className='mt-0'>
            <span onClick={PagetoggleDropdown} className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white cursor-pointer'>
              PAGES <FontAwesomeIcon className='pl-2' icon={faCaretDown} />
            </span>
            {dropdownOpen && (
              <ul className={`absolute mt-2 py-2 bg-white border shadow-lg ${dropdownOpen ? 'block' : 'hidden'}`} style={{ zIndex: 1 }}>
                <li>
                  <NavLink to='/' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blog' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Blog Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/receipe' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Receipe Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/element' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Elements
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className='mt-0'>
            <span onClick={MenutoggleDropdown} className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white cursor-pointer'>
              MEGA MENU <FontAwesomeIcon className='pl-2' icon={faCaretDown} />
            </span>
            {dropdownOpenn && (
              <ul className={`md:block hidden absolute mt-2 py-2 pl-6 pr-4 bg-white border shadow-lg ${dropdownOpenn ? 'block' : 'hidden'}`} style={{ zIndex: 1 }}>
                <li>
                  <NavLink to='/' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blog' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Blog Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/receipe' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Receipe Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/element' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600'>
                    Elements
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <NavLink to='/receipe' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white'>
            RECEIPIES
          </NavLink>
          <NavLink to='/receipe' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white'>
            4 VEGANS
          </NavLink>
          <NavLink to='/contact' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white'>
            CONTACT
          </NavLink>
        </ul>
        <div className="search-btn text-slate-400 p-6  hover:text-green-600 hidden md:block">
          <FontAwesomeIcon onClick={search} icon={faMagnifyingGlass} />
        </div>
      </div>
    </>
  );
}

export default Header;
