// import React from 'react'
// import { Typewriter } from 'react-simple-typewriter';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebookF, faDribbble, faBehance, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons'
// import { faMagnifyingGlass, faCaretDown, } from '@fortawesome/free-solid-svg-icons'
// import {  NavLink } from 'react-router-dom'


// function Header() {

//     const search = () => {
//         prompt('Search Items...')
//       }

//   return (
//     <>
//      <div className=' row flex items-center content-between p-4 ml-[15%]'>
//         <div className=' text-slate-400 text-sm font-semibold italic hover:text-green-600 w-[250px]'>
//           <Typewriter
//             words={['Hello World!', 'Welcome to Colorlib Family.', 'Hello Delicious!']}
//             loop={10000}
//             cursor
//             cursorStyle=''
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//           />
//         </div>
//         <div className="ml-[40%] text-sm text-right float-right sm:flex">
//           <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faPinterest} /></a>
//           <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
//           <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faTwitter} /></a>
//           <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faDribbble} /></a>
//           <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faBehance} /></a>
//           <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
//         </div>

//       </div>
//       < hr />
//       {/* <div className='flex p-8 ml-[14%]'> */}
//       <div className='flex p-8]'>
//         <a href="#"><img src="./images/logo.png" alt="logo" /></a>
//         <ul className='flex p-5 gap-2 ml-[9%] text-slate-600 font-semibold cursor-pointer'>
                 
//                   <NavLink to='/' className='bg-green-600 border-b-2 border-green-800 p-2 pl-4 pr-4 text-white hover:bg-green-700' >
//                       HOME
//                   </NavLink>
//                   <NavLink to='/' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white'  >
//                       PAGES <FontAwesomeIcon className='pl-2' icon={faCaretDown} /> 
//                   </NavLink>
//                   <NavLink to='/' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white' >
//                       MEGA MENU <FontAwesomeIcon className='pl-2' icon={faCaretDown} />
//                   </NavLink>
                 
//                   <NavLink to='/receipe' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white' >
//                       RECEIPIES
//                   </NavLink>
//                   <NavLink to='/receipe' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white' >
//                   4 VEGANS
//                   </NavLink>
//                   <NavLink to='/contact' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white' >
//                   CONTACT
//                   </NavLink>
//                   <NavLink to='/about' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white' >
//                   ABOUT US
//                   </NavLink>
//                   <NavLink to='/blog' className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white' >
//                   BLOG 
//                   </NavLink>
        
//         </ul>
//         <div className="search-btn text-slate-400 p-6 ml-10 hover:text-green-600">
//           <FontAwesomeIcon onClick={search} icon={faMagnifyingGlass} />
//         </div>
//       </div>

//     </>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faTwitter, faFacebookF, faDribbble, faBehance, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faCaretDown, } from '@fortawesome/free-solid-svg-icons'
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
      <div className='row flex items-center content-between p-4 ml-[15%]'>
        <div className='text-slate-400 text-sm font-semibold italic hover:text-green-600 w-[250px]'>
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
        <div className="ml-[40%] text-sm text-right float-right sm:flex">
          <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faDribbble} /></a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faBehance} /></a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
      <hr />
      <div className='flex p-8 ml-[13%]'>
        <a href="#"><img src="./images/logo.png" alt="logo" /></a>
        <ul className='flex p-5 gap-2 ml-[9%] text-slate-600 font-semibold cursor-pointer'>
          <NavLink to='/' className='bg-green-600 border-b-2 border-green-800 p-2 pl-4 pr-4 text-white hover:bg-green-700'>
            HOME
          </NavLink>
          <li className='mt-2'>
            <span onClick={PagetoggleDropdown} className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white cursor-pointer'>
              PAGES <FontAwesomeIcon className='pl-2' icon={faCaretDown} />
            </span>
            {dropdownOpen && (
              <ul className="absolute mt-2 py-2 bg-white border  shadow-lg">
                <li>
                  <NavLink to='/' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blog' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Blog Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/receipe' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Receipe Post
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Contact
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className='mt-2'>
            <span onClick={MenutoggleDropdown} className='p-2 pl-4 pr-4 hover:border-b-2 hover:border-green-800 hover:bg-green-600 hover:text-white cursor-pointer'>
              MEGA MENU <FontAwesomeIcon className='pl-2' icon={faCaretDown} />
            </span>
            {dropdownOpenn && (
              <ul className="absolute mt-2 py-2 pl-6 pr-8 bg-white border shadow-lg">
                <li>
                  <NavLink to='/about' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/blog' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                    Contact
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
        <div className="search-btn text-slate-400 p-6  hover:text-green-600">
          <FontAwesomeIcon onClick={search} icon={faMagnifyingGlass} />
        </div>
      </div>
    </>
  );
}

export default Header;
