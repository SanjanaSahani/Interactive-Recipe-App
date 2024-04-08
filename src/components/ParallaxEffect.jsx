import React from 'react';

const ParallaxImage = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0 z-0">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src='./images/bg4.jpg'
         alt="Parallax Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="text-center text-white w-[80%]">
          <h1 className="text-6xl font-semibold mb-6">Gluten Free Receipies</h1>
          <p className="text-lg mb-10">Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh</p>
          <button className='text-xl mb-4 border-l-4 border-green-800 bg-green-600 p-4 pl-4 pr-4 text-white' >Discover All The Receipe</button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxImage;


