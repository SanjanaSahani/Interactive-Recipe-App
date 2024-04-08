import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
   
    <div className='text-center'>
       {props.images} 
      <h1 className='text-xl m-4'>Sushi Easy Receipy</h1>
      <div className='flex justify-center items-center text-xs '>
        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
        <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
        <FontAwesomeIcon className='text-yellow-200' icon={faStar} />
      </div>
    </div>

  )
}

export default Card