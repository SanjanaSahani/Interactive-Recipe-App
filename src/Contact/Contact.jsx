import React from 'react'

function Contact() {
  return (
    <>
      <div>
        <img className=' relative w-[92%] h-[190px] ml-[4%] mr-[4%] filter brightness-50' src="./images/breadcumb4.jpg" alt="" />
        <h1 className='absolute top-[40%] left-[45%] text-white text-4xl font-bold '>Contact</h1>
      </div>

      <div className='ml-[15%] m-10'>
        <img src="./images/logo.png" alt="" />
      </div>

      <div className='flex ml-[15%] mr-[15%] gap-10'>
        <div className='text-slate-400 w-[450px]'>
          <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus.</p>
          <p>Orci varius natoque penatibus et magnis dis ac pellentesque tortor. Aenean congue parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div className='text-slate-400'>
          <div className='mb-6'>
            <h1 className='text-green-500 underline mb-4'>Address:</h1>
            <p>481 Creekside Lane Avila <br />
              Beach, CA 93424</p>
          </div>
          <div className='mb-6'>
            <h1 className='text-green-500 underline mb-4'>Address:</h1>
            <p>+53 345 7953 32453 <br />
              +53 345 7557 822112</p>
          </div>
          <div className='mb-6'>
            <h1 className='text-green-500 underline '>Address:</h1>
            <p>yourmail@gmail.com</p>
          </div>
        </div>
        <div className='w-[323px] h-[400px] mt-[-30px]'>
          <img className='w-[320px] h-[331px] mt-8' src="./images/bg1.jpg" alt="" />
          <div className=' w-[320px] h-[290px] absolute top-[83.5%]' style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
            <button className='bg-white ml-4 border-4 border-transparent border-l-green-700 text-slate-600 p-2 w-[285px]'>Subscribe to newsletter</button><br />
            <button className='bg-green-600 ml-4 mt-6 border-transparent border-4 border-l-green-700 text-white p-2 pl-10 pr-10 w-[285px]'>Subscribe</button>
            <p className='text-white text-sm italic p-4 '>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie.</p>
          </div>
        </div>
      </div>

      <div className='ml-[15%] mr-[15%] mt-10'>
        <h1 className='text-3xl font-semibold mt-4 mb-12 text-center'>Get In Touch</h1>
        <form action="#" className=' '>
         <div className='flex flex-wrap gap-10 mb-4'>
         <input className='w-[510px] bg-slate-200 p-4  italic text-xs' type="text" name="text" id="text" placeholder='Name' />
          <input className='w-[510px] bg-slate-200 p-4  italic text-xs' type="email" name="email" id="email" placeholder='E-mail' />
         </div>
          <input className='w-[1060px] bg-slate-200 p-4 mb-4 italic text-xs' type="text" name="subject" id="subject" placeholder='Subject' /> <br />
          <input className='w-[1060px] h-[215px] bg-slate-200 p-4 border-l-green-600 border-4 border-transparent mb-10 italic text-xs' type="text" name="message" id="message" placeholder='Message' /> <br />
          <button className='bg-green-500 border-l-2 font-semibold border-green-800 p-4 pl-14 pr-14 mb-20 text-white hover:bg-green-700 ml-[45%]'>
              Send
            </button>
        </form>
      </div>
    </>
  )
}

export default Contact