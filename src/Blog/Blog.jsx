import React from 'react'

function Blog() {
  return (
    <>
      <div>
        <img className=' relative w-[92%] h-[190px] ml-[4%] mr-[4%] filter brightness-50' src="./images/breadcumb2.jpg" alt="" />
        <h1 className='absolute top-[30%] left-[45%] text-white text-4xl font-bold '>Blog</h1>
      </div>

      <div className='flex m-20 ml-[15%] mr-[15%] gap-12'>
        <div>
          <div className='w-[680px]'>
            <img className='w-[680px] mb-10' src="./images/1.jpg" alt="" />
            <h1 className='text-2xl text-slate-700 font-semibold hover:text-green-700'>How to find amazing restaurants in your city</h1>
            <p className='text-slate-400 text-sm mb-8 '>by <span className='underline hover:text-green-700'> Maria Williams</span> in <span className='underline hover:text-green-700'>Restaurants</span></p>
            <p className='text-slate-500 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <button className='bg-green-600 mb-20 border-l-2 border-green-800 p-4 pl-12 pr-12 text-white hover:bg-green-700'>
              Read More
            </button>
          </div>
          <div className='bg-green-600 w-[80px] text-white p-2 hover:bg-green-700 absolute top-[62%] left-[16%] cursor-pointer'>
            <h1 className='font-semibold text-4xl'>05</h1>
            <p>April</p>
            <p>2018</p>
          </div>
          <div className='w-[680px]'>
            <img className='w-[680px] mb-10' src="./images/2.jpg" alt="" />
            <h1 className='text-2xl text-slate-700 font-semibold hover:text-green-700'>How to find amazing restaurants in your city</h1>
            <p className='text-slate-400 text-sm mb-8 '>by <span className='underline hover:text-green-700'> Maria Williams</span> in <span className='underline hover:text-green-700'>Restaurants</span></p>
            <p className='text-slate-500 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <button className='bg-green-600 mb-20 border-l-2 border-green-800 p-4 pl-12 pr-12 text-white hover:bg-green-700'>
              Read More
            </button>
          </div>
          <div className='bg-green-600 w-[80px] text-white p-2 hover:bg-green-700 absolute top-[154%] left-[16%] cursor-pointer'>
            <h1 className='font-semibold text-4xl'>05</h1>
            <p>April</p>
            <p>2018</p>
          </div>
          <div className='w-[680px]'>
            <img className='w-[680px] mb-10' src="./images/3.jpg" alt="" />
            <h1 className='text-2xl text-slate-700 font-semibold hover:text-green-700'>How to find amazing restaurants in your city</h1>
            <p className='text-slate-400 text-sm mb-8 '>by <span className='underline hover:text-green-700'> Maria Williams</span> in <span className='underline hover:text-green-700'>Restaurants</span></p>
            <p className='text-slate-500 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <button className='bg-green-600 mb-10 border-l-2 border-green-800 p-4 pl-12 pr-12 text-white hover:bg-green-700'>
              Read More
            </button>
          </div>
          <div className='bg-green-600 w-[80px] text-white p-2 hover:bg-green-700 absolute top-[246%] left-[16%] cursor-pointer'>
            <h1 className='font-semibold text-4xl'>05</h1>
            <p>April</p>
            <p>2018</p>
          </div>
        </div>

        <div>
          <div>
            <h1 className='text-md font-semibold mb-12'>Archive</h1>
            <div className='ml-6 cursor-pointer'>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>March 2018</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>February 2018</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>January 2018</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>December 2017</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-8'>November 2017</p>
            </div>
          </div>
          <div>
            <h1 className='text-md font-semibold mb-12'>Categories</h1>
            <div className='ml-6 cursor-pointer'>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>Restaurants</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>Food & Drinks</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>Vegans</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-1'>Events & Lifestyle</p>
              <p className=' text-slate-400 font-semibold hover:text-green-700 mb-8'>Uncategorized</p>
            </div>
          </div>
          <div>
            <h1 className='text-md font-semibold'>Newsletter</h1>
            <div className='w-[320px] h-[400px]'>
              <img className='w-[320px] h-[331px] mt-12' src="./images/bg1.jpg" alt="" />
              <div className='absolute top-[141%] w-[320px] h-[290px]' style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
                <button className='bg-white ml-4 border-4 border-transparent border-l-green-700 text-slate-600 p-2 w-[285px]'>Subscribe to newsletter</button><br />
                <button className='bg-green-600 ml-4 mt-6 border-transparent border-4 border-l-green-700 text-white p-2 pl-10 pr-10 w-[285px] cursor-pointer'>Subscribe</button>
                <p className='text-white text-sm italic p-4 '>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
              </div>
            </div>
            <div className='border-8 border-green-600 w-[320px] h-[400px] text-center'>
              <span className='text-6xl text-green-600 text-center'>,,</span>
              <h1 className='text-2xl p-2 mt-10 italic'>Nothing is better than going home to family and eating good food and relaxing</h1>
              <p className='mt-10'>John Smith</p>
              <div className='flex text-slate-500 justify-between mt-8 p-2'>
                <p className='text-green-500'>January 04, 2024</p>
                <p>2 Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Blog