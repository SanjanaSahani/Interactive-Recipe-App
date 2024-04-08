import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Receipe() {

  const [currentIndex, setCurrentIndex] = useState(0);


  const images = [
    '/images/bg5.jpg',
    '/images/bg5.jpg',
    '/images/bg5.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div>
        <img className=' relative w-[92%] h-[190px] ml-[4%] mr-[4%] filter brightness-50' src="./images/breadcumb3.jpg" alt="" />
        <h1 className='absolute top-[40%] left-[45%] text-white text-4xl font-bold '>Receipe</h1>
      </div>

      <div className='flex justify-center items-center gap-16 m-20'>
        <div className=' bg-slate-100 pt-4 p-4 pr-6'>
          <select className=' bg-slate-100 text-center ' name="select1" id="select1">
            <option value="1">All Receipies Categories</option>
            <option value="1">All Receipies Categories 2</option>
            <option value="1">All Receipies Categories 3</option>
            <option value="1">All Receipies Categories 4</option>
            <option value="1">All Receipies Categories 5</option>
          </select>
        </div>
        <div className=' bg-slate-100 pt-4 p-4 pr-6'>
          <select className=' bg-slate-100 text-center' name="select2" id="select2">
            <option value="2">All Receipies Categories</option>
            <option value="2">All Receipies Categories 2</option>
            <option value="2">All Receipies Categories 3</option>
            <option value="2">All Receipies Categories 4</option>
            <option value="2">All Receipies Categories 5</option>
          </select>
        </div>
        <input className=' bg-slate-100 text-center p-4 ppl-8 pr-10' type="search" name="Search" id="search" placeholder='Search Receipe' />
        <button className='bg-green-600 border-l-2 border-green-800 p-4 pl-12 pr-12 text-white hover:bg-green-700'>
          Search
        </button>
      </div>


      <div className='relative  ml-[15%] mr-[15%]'>
        {/* for buttons  */}
        <button
          className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xl font-semibold z-10 m-8'
          onClick={handlePrev}
        >
          Prev <hr className='bg-green-600 h-1' />
        </button>
        <button
          className='absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xl font-semibold z-10 m-8'
          onClick={handleNext}
        >
          Next <hr className='bg-green-600 h-1' />
        </button>
        {/* for carousel  */}

        <div className='relative overflow-hidden delay-500'>
          <div
            className='flex'
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className='transition-transform duration-500 transform'
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center m-12 gap-96' >
        <div>
          <p className='text-slate-500'>April 05, 2018</p>
          <h1 className='text-4xl text-slate-700 font-semibold'>Vegetarian cheese salad</h1>
          <div className='border-4 border-transparent border-l-green-600 font-semibold pl-4 mt-8 mb-8'>
            <h1>Prep: 15 mins</h1>
            <h1>Cook: 30 mins</h1>
            <h1>Yields: 8 Servings</h1>
          </div>
        </div>
        <div>
          <div className='text-l pl-24 pb-8'>
            <FontAwesomeIcon className='text-yellow-400 p-2' icon={faStar} />
            <FontAwesomeIcon className='text-yellow-400 p-2' icon={faStar} />
            <FontAwesomeIcon className='text-yellow-400 p-2' icon={faStar} />
            <FontAwesomeIcon className='text-yellow-400 p-2' icon={faStar} />
            <FontAwesomeIcon className='text-yellow-200 p-2' icon={faStar} />
          </div>
          <div className='pl-20'>
            <button className='bg-green-600 border-l-2  border-green-800 p-6 pl-12 pr-12 text-white hover:bg-green-700'>
              For Beginner
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='w-[45%] ml-18'>
          <div className='flex'>
            <h1 className='text-2xl font-semibold text-slate-500'>01.</h1>
            <p className='text-slate-400 ml-4 mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className='flex'>
            <h1 className='text-2xl font-semibold text-slate-500'>02.</h1>
            <p className='text-slate-400 ml-4 mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className='flex'>
            <h1 className='text-2xl font-semibold text-slate-500'>03.</h1>
            <p className='text-slate-400 ml-4 mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className='flex'>
            <h1 className='text-2xl font-semibold text-slate-500'>04.</h1>
            <p className='text-slate-400 ml-4 mb-16'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>

        </div>
        <div className='mt-[-89px] w-[25%]'>
          <h1 className='text-xl font-semibold text-slate-700 ml-8'>Ingredients</h1>
          <div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>4 Tbsp (57 gr) butter</p>
            </div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>2 large eggs</p>
            </div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>2 yogurt containers granulated sugar</p>
            </div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>1 vanilla or plain yogurt, 170g container</p>
            </div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>2 yogurt containers unbleached white flour</p>
            </div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>1.5 yogurt containers milk</p>
            </div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>1/4 tsp cinnamon</p>
            </div>
            <div className='flex gap-4 m-8 font-semibold'>
              <p className='border-transparent bg-slate-200 p-2 w-6 h-6'></p>
              <p>1 cup fresh blueberries</p>
            </div>
          </div>
        </div>
      </div>

      <div className='ml-[15%] mr-[15%]'>
        <h1 className='text-3xl font-semibold mt-4 mb-12'>Leave a comment</h1>
        <form action="#" className=' '>
         <div className='flex flex-wrap gap-10 mb-4'>
         <input className='w-[510px] bg-slate-200 p-4  italic text-xs' type="text" name="text" id="text" placeholder='Name' />
          <input className='w-[510px] bg-slate-200 p-4  italic text-xs' type="email" name="email" id="email" placeholder='E-mail' />
         </div>
          <input className='w-[1060px] bg-slate-200 p-4 mb-4 italic text-xs' type="text" name="subject" id="subject" placeholder='Subject' /> <br />
          <input className='w-[1060px] h-[215px] bg-slate-200 p-4 border-l-green-600 border-4 border-transparent mb-10 italic text-xs' type="text" name="message" id="message" placeholder='Message' /> <br />
          <button className='bg-green-500 border-l-2  border-green-800 p-6 pl-12 pr-12 mb-20 text-white hover:bg-green-700'>
              Post Comments
            </button>
        </form>
      
      </div>
    </>
  )
}

export default Receipe