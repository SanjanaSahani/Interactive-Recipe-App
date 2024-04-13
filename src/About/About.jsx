    import React, { useState, useEffect } from 'react';

    function About() {
        const [recipeCounts, setRecipeCounts] = useState({
            amazing: 0,
            burger: 0,
            meat: 0,
            dessert: 0
        });
    
        useEffect(() => {
            const endCounts = {
                amazing: 1287,
                burger: 25,
                meat: 471,
                dessert: 326
            };
    
            const timer = setInterval(() => {
                setRecipeCounts(prevCounts => {
                    const newCounts = { ...prevCounts };
                    let isComplete = true;
    
                    for (const key in prevCounts) {
                        if (newCounts[key] < endCounts[key]) {
                            newCounts[key] += 1;
                            isComplete = false;
                        }
                    }
    
                    if (isComplete) clearInterval(timer);
                    
                    return newCounts;
                });
            }, 1);
    
            return () => clearInterval(timer);
        }, []);

    return (
        <>
            <div>
                <img className=' relative w-[92%] h-[190px] ml-[4%] mr-[4%] filter brightness-50' src="./images/breadcumb1.jpg" alt="" />
                <h1 className='absolute top-[40%] md:left-[45%] left-[29%] text-white text-4xl font-bold '>About Us</h1>
            </div>

            <div className='text-center m-20 ml-[15%] mr-[15%]'>
                <h1 className='text-3xl mb-10 font-semibold'>Who we are and what we do?</h1>
                <p className='text-xl font-semibold mb-10'>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                <p className=' text-slate-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>

            <div className='md:flex ml-[15%] mr-[15%] gap-36'>
                <div>
                    <img className='md:ml-10 ml-24' src="./images/salad.png" alt="" />
                    <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.amazing}</h1>
                    <h1 className='text-xl font-semibold md:ml-none ml-[50px] md:mb-none mb-[40px]'>Amazing receipies</h1>
                </div>
                <div>
                    <img className='md:ml-10 ml-24 ' src="./images/hamburger.png" alt="" />
                    <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.burger}</h1>
                    <h1 className='text-xl font-semibold md:ml-none ml-[50px] md:mb-none mb-[40px]'>Burger receipies</h1>
                </div>
                <div>
                    <img className='md:ml-10 ml-24' src="./images/rib.png" alt="" />
                    <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.meat}</h1>
                    <h1 className='text-xl font-semibold md:ml-none ml-[50px] md:mb-none mb-[40px]'>Meat receipies</h1>
                </div>
                <div>
                    <img className='md:ml-10 ml-24' src="./images/pancake.png" alt="" />
                    <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.dessert}</h1>
                    <h1 className='text-xl font-semibold md:ml-none ml-[50px] md:mb-none mb-[40px]'>Desert receipieses</h1>
                </div>
            </div>

            <div className='ml-[15%] mr-[15%] m-20'>
                <img src="./images/about.png" alt="" />
            </div>
            <div className='ml-[15%] mr-[15%]'>
                <p className='text-slate-400 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>

            <div className='ml-[15%] mr-[15%] mt-10'>
                <h1 className='text-3xl font-semibold mt-4 mb-16 text-center'>Contact Us</h1>
                <form action="#" className=' '>
                    <div className='flex flex-wrap gap-10 mb-4'>
                        <input className='w-[510px] bg-slate-200 p-4  italic text-xs' type="text" name="text" id="text" placeholder='Name' />
                        <input className='w-[510px] bg-slate-200 p-4  italic text-xs' type="email" name="email" id="email" placeholder='E-mail' />
                    </div>
                    <input className='md:w-[1060px] w-full bg-slate-200 p-4 mb-4 italic text-xs' type="text" name="subject" id="subject" placeholder='Subject' /> <br />
                    <input className='md:w-[1060px] w-full h-[215px] bg-slate-200 p-4 border-l-green-600 border-4 border-transparent mb-10 italic text-xs' type="text" name="message" id="message" placeholder='Message' /> <br />
                    <button className='bg-green-500 border-l-2 font-semibold border-green-800 p-4 pl-14 pr-14 mb-20 text-white hover:bg-green-700 md:ml-[45%] ml-[22%]'>
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}

export default About