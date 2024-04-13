import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Scard(props) {
  return (
    <div className='flex w-full md:w-1/2 lg:w-1/4'>
      <div className='w-[80px] h-[80px]'>{props.image}</div>
      <div className='ml-6'>
        <p className='text-green-300'>January 04, 2018</p>
        <h1 className='text-xl'>{props.name}</h1>
        <div className='flex text-xs'>
          <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-200' icon={faStar} />
        </div>
        <p className='text-slate-400'>2 comments</p>
      </div>
    </div>
  )
}

export default Scard;
