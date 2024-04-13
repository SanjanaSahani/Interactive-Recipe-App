import React from 'react';
import Card from '../components/Card';
import ParallaxEffect from '../components/ParallaxEffect';
import ImageCarousel from '../components/ImageCarousel'
import Scard from '../components/Scard';

function Home() {

  return (
    <>

      <div className='md:w-[1320px] md:ml-[7%] w-[1100px]'>
        <ImageCarousel />
      </div>

      <div className='flex flex-wrap justify-center items-center md:m-20 gap-8 m-[20px]'>
        <img className='w-[520px] h-[210px]' src="./images/bg2.jpg" alt="bg" />
        <div className=' md:w-[519px] w-[337px]  h-[210px] z-10 text-white p-10 opacity-1 absolute md:left-[14.8%] m-[20px] md:m-0 md:top-[161%] top-[138%]'
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
          <h1 className='text-4xl mb-2'>Strawberry Cake</h1>
          <p className='mb-4 text-xl'>Simple & Delicious</p>
          <button className='text-xl mb-2 border-l-4 border-green-800 bg-green-500 p-2 pl-4 pr-4 text-white' >See Full Receipe</button>
        </div>
        <img className='w-[520px] h-[210px]' src="./images/bg3.jpg" alt="bg" />
        <div className=' md:w-[519px] w-[337px] h-[210px] z-10 text-white md:p-10 p-[27px] opacity-1 absolute md:left-[51%] left-[19px] md:top-[161%] top-[177%]'
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
          <h1 className='text-4xl mb-2'>Chinesse Noodles</h1>
          <p className='mb-4 text-xl'>Simple & Delicious</p>
          <button className='text-xl mb-2 border-l-4 border-green-800 bg-green-500 p-2 pl-4 pr-4 text-white' >See Full Receipe</button>
        </div>
      </div>

      <div className='w-full px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 mb-12'>
        <h1 className='text-center text-4xl font-semibold'>The Best Recipes</h1>
        <div className='flex flex-wrap justify-center items-center gap-8 mt-12'>
          <Card images={<img className='w-full md:w-[340px] h-[270px]' src="./images/r1.jpg" alt="bg" />} />
          <Card images={<img className='w-full md:w-[340px] h-[270px]' src="./images/r2.jpg" alt="bg" />} />
          <Card images={<img className='w-full md:w-[340px] h-[270px]' src="./images/r3.jpg" alt="bg" />} />
          <Card images={<img className='w-full md:w-[340px] h-[270px]' src="./images/r4.jpg" alt="bg" />} />
          <Card images={<img className='w-full md:w-[340px] h-[270px]' src="./images/r5.jpg" alt="bg" />} />
          <Card images={<img className='w-full md:w-[340px] h-[270px]' src="./images/r6.jpg" alt="bg" />} />
        </div>
      </div>


      <div>
        <ParallaxEffect />
      </div>

      <div className='ml-[8%] flex flex-wrap justify-center items-center gap-12 m-12'>
        <Scard image={<img src="./images/sr1.jpg" alt="bg" />} name='Homemade italian pasta' />
        <Scard image={<img src="./images/sr2.jpg" alt="bg" />} name='Baked Bread' />
        <Scard image={<img src="./images/sr3.jpg" alt="bg" />} name='Scallops on salt' />
        <Scard image={<img src="./images/sr4.jpg" alt="bg" />} name='Fruits on plate' />
        <Scard image={<img src="./images/sr5.jpg" alt="bg" />} name='Macaroons' />
        <Scard image={<img src="./images/sr6.jpg" alt="bg" />} name='Chocolate tart' />
        <Scard image={<img src="./images/sr7.jpg" alt="bg" />} name='Berry Desert' />
        <Scard image={<img src="./images/sr8.jpg" alt="bg" />} name='Zucchini Grilled on pepper' />
        <Scard image={<img src="./images/sr9.jpg" alt="bg" />} name='Chicken Salad' />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-10 m-6 md:m-24'>
        <div className='border-8 border-green-600 w-full md:w-[320px] h-[400px] text-center'>
          <span className='text-6xl text-green-600'>,,</span>
          <h1 className='text-2xl p-2 mt-8 italic'>Nothing is better than going home to family and eating good food and relaxing</h1>
          <p className='mt-10'>John Smith</p>
          <div className='flex text-slate-500 justify-between mt-10 p-2'>
            <p className='text-green-500'>January 04, 2024</p>
            <p>2 Comments</p>
          </div>
        </div>
        <div className='w-full md:w-[320px] h-[400px] relative'>
          <h1 className='text-2xl'>Subscribe to our newsletter</h1>
          <img className='w-full h-[331px] mt-8' src="./images/bg1.jpg" alt="" />
          <div className='absolute top-[26%] md:top-[26%] w-full h-[290px] md:w-[320px] bg-opacity-50 bg-gray-900'>
            <button className='bg-white ml-4 border-4 border-transparent border-l-green-700 text-slate-600 p-2 md:w-[285px]'>Subscribe to newsletter</button><br />
            <button className='bg-green-600 ml-4 mt-6 border-transparent border-4 border-l-green-700 text-white p-2 pl-10 pr-10 md:w-[285px]'>Subscribe</button>
            <p className='text-white text-sm italic p-4 '>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
          </div>
        </div>
        <div>
          <img className='w-full md:w-[320px] h-[375px]' src="./images/add.png" alt="" />
        </div>
      </div>

    </>
  )
}

export default Home;