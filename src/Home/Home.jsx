import React from 'react';
import Card from '../components/Card';
import ParallaxEffect from '../components/ParallaxEffect';
import ImageCarousel from '../components/ImageCarousel'
import Scard from '../components/Scard';

function Home() {
 
   return (
    <>
     
      <div className='w-[1320px] ml-[7%]'>
        <ImageCarousel/>
      </div>

      <div className='flex flex-wrap justify-center items-center m-20 gap-8'>
        <img className='w-[520px] h-[210px]' src="./images/bg2.jpg" alt="bg" />
        <div className=' w-[519px]  h-[210px] z-10 text-white p-10 opacity-1 absolute left-[14.8%] '
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
          <h1 className='text-4xl mb-2'>Strawberry Cake</h1>
          <p className='mb-4 text-xl'>Simple & Delicious</p>
          <button className='text-xl mb-2 border-l-4 border-green-800 bg-green-500 p-2 pl-4 pr-4 text-white' >See Full Receipe</button>
        </div>
        <img className='w-[520px] h-[210px]' src="./images/bg3.jpg" alt="bg" />
        <div className=' w-[519px]  h-[210px] z-10 text-white p-10 opacity-1 absolute left-[51%] '
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
          <h1 className='text-4xl mb-2'>Chinesse Noodles</h1>
          <p className='mb-4 text-xl'>Simple & Delicious</p>
          <button className='text-xl mb-2 border-l-4 border-green-800 bg-green-500 p-2 pl-4 pr-4 text-white' >See Full Receipe</button>
        </div>
      </div>

      <div className=' w-[1210px] ml-[10%]'>
        <h1 className='text-center text-4xl font-semibold'>The best Receipies</h1>
        <div className='flex flex-wrap justify-center items-center gap-8 m-12 '>
          <Card images={<img className=' w-[340px]  h-[270px]' src="./images/r1.jpg" alt="bg" />} />
          <Card images={<img className=' w-[340px]  h-[270px]' src="./images/r2.jpg" alt="bg" />} />
          <Card images={<img className=' w-[340px]  h-[270px]' src="./images/r3.jpg" alt="bg" />} />
          <Card images={<img className=' w-[340px]  h-[270px]' src="./images/r4.jpg" alt="bg" />} />
          <Card images={<img className=' w-[340px]  h-[270px]' src="./images/r5.jpg" alt="bg" />} />
          <Card images={<img className=' w-[340px]  h-[270px]' src="./images/r6.jpg" alt="bg" />} />
        </div>
      </div>

      <div>
        <ParallaxEffect />
      </div>

      <div className='ml-[8%] flex flex-wrap justify-center items-center gap-12 m-12'>
        <Scard image={<img src="./images/sr1.jpg" alt="bg" />} name='Homemade italian pasta' />
        <Scard image={<img src="./images/sr2.jpg" alt="bg" />} name='Baked Bread' />
        <Scard image={<img src="./images/sr3.jpg" alt="bg" />} name='Scalops on salt' />
        <Scard image={<img src="./images/sr4.jpg" alt="bg" />} name='Fruits on plate' />
        <Scard image={<img src="./images/sr5.jpg" alt="bg" />} name='Macaroons' />
        <Scard image={<img src="./images/sr6.jpg" alt="bg" />} name='Chocolate tart' />
        <Scard image={<img src="./images/sr7.jpg" alt="bg" />} name='Berry Desert' />
        <Scard image={<img src="./images/sr8.jpg" alt="bg" />} name='Zucchini Grilled on peper' />
        <Scard image={<img src="./images/sr9.jpg" alt="bg" />} name='Chicken Salad' />
      </div>

      <div className='flex justify-center items-center gap-10 m-24'>
        <div className='border-4 border-green-600 w-[320px] h-[400px] text-center'>
          <span className='text-6xl text-green-600 text-center'>,,</span>
          <h1 className='text-2xl p-2 mt-10 italic'>Nothing is better than going home to family and eating good food and relaxing</h1>
          <p className='mt-10'>John Smith</p>
          <div className='flex text-slate-500 justify-between mt-10 p-2'>
            <p className='text-green-500'>January 04, 2024</p>
            <p>2 Comments</p>
          </div>
        </div>
        <div className='w-[320px] h-[400px]'>
          <h1 className='text-2xl'>Subscribe to our newsletter</h1>
          <img className='w-[320px] h-[331px] mt-8' src="./images/bg1.jpg" alt="" />
          <div className='absolute top-[500%] w-[320px] h-[290px]' style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
            <button className='bg-white ml-4 border-4 border-transparent border-l-green-700 text-slate-600 p-2 w-[285px]'>Subscribe to newsletter</button><br />
            <button className='bg-green-600 ml-4 mt-6 border-transparent border-4 border-l-green-700 text-white p-2 pl-10 pr-10 w-[285px]'>Subscribe</button>
            <p className='text-white text-sm italic p-4 '>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
          </div>
        </div>
        <div>
          <img className='w-[320px] h-[375px]' src="./images/add.png" alt="" />
        </div>
      </div>

    </>
  )
}

export default Home;