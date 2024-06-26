import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faDribbble, faBehance, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <>

      <hr />
      <div>
        <h1 className='text-xl m-8 ml-[16%]'>Follow Us On Instagram</h1>
        <div className='flex md:flex-nowrap flex-wrap overflow-hidden cursor-pointer'>
          <img className='w-50px md:w-[220px] md:h-[180px] h-[68px] transition-transform transform-gpu hover:scale-150 hover:ease-in hover:delay-150' src="./images/r1.jpg" alt="bg" />
          <img className='w-50px md:w-[220px] md:h-[180px] h-[68px] transition-transform transform-gpu hover:scale-150 hover:ease-in hover:delay-150' src="./images/bg3.jpg" alt="bg" />
          <img className='w-50px md:w-[220px] md:h-[180px] h-[68px] transition-transform transform-gpu hover:scale-150 hover:ease-in hover:delay-150' src="./images/sr7.jpg" alt="bg" />
          <img className='w-50px md:w-[220px] md:h-[180px] h-[68px] transition-transform transform-gpu hover:scale-150 hover:ease-in hover:delay-150' src="./images/sr8.jpg" alt="bg" />
          <img className='w-50px md:w-[220px] md:h-[180px] h-[68px] transition-transform transform-gpu hover:scale-150 hover:ease-in hover:delay-150' src="./images/r3.jpg" alt="bg" />
          <img className='w-50px md:w-[220px] md:h-[180px] h-[68px] transition-transform transform-gpu hover:scale-150 hover:ease-in hover:delay-150' src="./images/r6.jpg" alt="bg" />
          <img className='w-50px md:w-[220px] md:h-[180px] h-[68px] transition-transform transform-gpu hover:scale-150 hover:ease-in hover:delay-150' src="./images/r2.jpg" alt="bg" />
        </div>

      </div>

      <div className='md:flex md:ml-[14%]  m-[30px]'>

        <div className='mt-16 text-sm'>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#">
            <FontAwesomeIcon icon={faBehance} />
          </a>
          <a className='p-4 text-slate-400 hover:text-green-600' href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <div className='md:m-10 m-4'>
          <a href="#">
            <img className="w-auto h-16" src="./images/logo.png" alt="logo" />
          </a>
        </div>

        <div className='md:mt-16 mt-6 text-md'>
          <h1>
            Copyright ©2024 All rights reserved | This template is made with
            <FontAwesomeIcon className='text-red-600' icon={faHeart} /> by Sanjana
          </h1>
        </div>

      </div>

      <div className='w-10 text-center bg-green-600 h-10 ml-[12%] fixed bottom-20 right-8'>
        <a href="#top">
          <FontAwesomeIcon className='text-white mt-3' icon={faCaretUp} />
        </a>
      </div>

    </>
  )
}

export default Footer