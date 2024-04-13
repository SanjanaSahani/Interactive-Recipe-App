import React, { useEffect, useState } from 'react';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showpara, setShowpara] = useState(false);

    const images = [
        '/images/bg1.jpg',
        '/images/bg6.jpg',
        '/images/bg7.jpg',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setShowpara(true);
            setTimeout(() => {
                setShowpara(false);
                
            }, 4000);
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
        <div className='relative'>

            {/* for buttons  */}
            <button
                className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-xl font-semibold z-10 m-8 md:block hidden'
                onClick={handlePrev}
            >
                Prev <hr className='bg-green-600 h-1' />
            </button>
            <button
                className='absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xl font-semibold z-10 m-8 md:block hidden'
                onClick={handleNext}
            >
                Next <hr className='bg-green-600 h-1' />
            </button>

            {/* for Paragraph  */}

            {showpara && (<div className='md:w-[530px] w-[30%] absolute md:top-[36%] top-[15%] border-l-4 border-green-800 md:left-[32%] left-[17%] z-10 text-white p-10 opacity-1 transform -translate-x-1/2'
                style={{ backgroundColor: 'rgba(24, 24, 24, 0.54)' }}>
                <h1 className='text-4xl mb-6'>Delicios Homemade Burger</h1>
                <p className='mb-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni eos iste numquam exercitationem odio asperiores laudantium dolorum quibusdam, adipisci reprehenderit sint facere quo?</p>
                <button className='text-xl mb-4 border-l-4 border-green-800 bg-green-500 p-2 pl-4 pr-4 text-white' >See Receipe</button>
            </div>)}

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
                            className='md:w-full  transition-transform duration-500 transform  '
                            src={image}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
