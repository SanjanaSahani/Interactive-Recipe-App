import React, { useState, useEffect } from 'react';
import Accordion from '../components/Accordion'
import ProgressLoader from '../components/ProgressLoader';

function Element() {

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
                <img className=' relative w-[92%] h-[190px] md:ml-[4%] ml-[2%] mr-[4%] filter brightness-50' src="./images/breadcumb5.jpg" alt="" />
                <h1 className='absolute top-[40%] md:left-[45%] left-[26%] text-white text-4xl font-bold '>Elements</h1>
            </div>

            <div className='mt-20 md:ml-[15%] ml-[8%] mr-[15%]'>
                <h1 className='text-3xl font-semibold text-slate-700 mb-20'>Buttons</h1>
                <div className="flex flex-col lg:flex-row gap-4">
                    <button className="bg-green-500 lg:border-l-4 font-semibold border-green-800 p-4 pl-12 pr-12 text-white hover:bg-green-700">
                        See Recipe
                    </button>
                    <button className="bg-green-600 lg:border-l-4 font-semibold border-green-800 p-4 pl-12 pr-12 text-white hover:bg-green-700">
                        See Recipe
                    </button>
                    <button className="bg-gray-600 lg:border-l-4 font-semibold border-green-800 p-4 pl-12 pr-12 text-white hover:bg-green-700">
                        See Recipe
                    </button>
                    <button className="border-4 font-semibold border-green-700 p-4 pl-12 pr-12 text-green-700">
                        See Recipe
                    </button>
                </div>

            </div>

            <div className='mt-20 md:ml-[15%] ml-[8%] mr-[15%] '>
                <h1 className='text-3xl font-semibold text-slate-700 mb-20'>Accordians & Tabs</h1>
                <div className='md:flex gap-8'>
                    <Accordion />
                    <div>
                        <div className='md:flex gap-4 md:mt-0 mt-10'>
                            <button className='  border-l-4 font-semibold border-green-700m m-[3px] p-4 pl-4 pr-4 bg-slate-100 text-slate-400 h-14 '>
                                Varius massa
                            </button>
                            <button className='  border-l-4 font-semibold border-green-700 p-4 pl-4 pr-4 bg-slate-100 text-slate-400 h-14'>
                                Hendrerit varius
                            </button>
                            <button className='  border-l-4 font-semibold bg-green-600 text-white border-green-800 p-4 pl-4 pr-4 h-14  hover:bg-green-700'>
                                Aenean hendrerit
                            </button>
                        </div>
                        <div className='text-slate-400 mt-20'>
                            <p>Integer nec bibendum lacus. Praesent malesuada congue, Suspendisse dictum enim sit amet libero malesu ada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Praesent malesuada congue.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='m-20 md:ml-[15%] ml-[8%] mr-[15%]'>
                <h1 className='text-3xl font-semibold text-slate-700 mb-20'>Milestone</h1>
                <div className='md:flex gap-36'>
                    <div>
                        <img className='md:ml-10 ml-24' src="./images/salad.png" alt="" />
                        <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.amazing}</h1>
                        <h1 className='text-xl font-semibold md:ml-none ml-[60px] md:mb-none mb-4'>Amazing receipies</h1>
                    </div>
                    <div>
                        <img className='md:ml-10 ml-24 ' src="./images/hamburger.png" alt="" />
                        <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.burger}</h1>
                        <h1 className='text-xl font-semibold md:ml-none ml-[60px]  md:mb-none mb-4'>Burger receipies</h1>
                    </div>
                    <div>
                        <img className='md:ml-10 ml-24' src="./images/rib.png" alt="" />
                        <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.meat}</h1>
                        <h1 className='text-xl font-semibold md:ml-none ml-[60px] md:mb-none mb-4'>Meat receipies</h1>
                    </div>
                    <div>
                        <img className='md:ml-10 ml-24' src="./images/pancake.png" alt="" />
                        <h1 className='text-center text-5xl font-bold text-green-500 m-4'>{recipeCounts.dessert}</h1>
                        <h1 className='text-xl font-semibold md:ml-none ml-[60px] md:mb-none mb-4'>Desert receipieses</h1>
                    </div>
                </div>
            </div>

            <div className='m-20 md:ml-[15%] ml-[8%] mr-[15%]'>
                <h1 className='text-3xl font-semibold text-slate-700 mb-20'>Loaders</h1>
                <div className='md:flex gap-40 md:ml-8 ml-[28%]'>
                    <ProgressLoader percent={95} title='Recipies' />
                    <ProgressLoader percent={100} title='Pure Love' />
                    <ProgressLoader percent={85} title='Creativity' />
                    <ProgressLoader percent={52} title='Passion' />
                </div>
            </div>

            <div className='m-20 md:ml-[15%] ml-[8%] mr-[15%]'>
                <h1 className='text-3xl font-semibold text-slate-700 mb-20'>Icon Boxes</h1>
                <div className='md:flex gap-8 mb-20'>
                    <div className='md:mb-0 mb-[15%]'>
                        <div className='flex gap-10'>
                            <img className=' w-[41px] h-[41px]' src="./images/hamburger.png" alt="" />
                            <h1 className='text-xl font-semibold'>Burger receipies</h1>
                        </div>
                        <p className='text-slate-400 mt-10'>Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibu.</p>
                    </div>
                    <div className='md:mb-0 mb-[15%]'>
                        <div className='flex gap-10'>
                            <img src="./images/pizza.png" alt="" />
                            <h1 className='text-xl font-semibold'>Italian Food</h1>
                        </div>
                        <p className='text-slate-400 mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor.</p>
                    </div>
                    <div>
                        <div className='flex gap-10'>
                            <img src="./images/cake2.png" alt="" />
                            <h1 className='text-xl font-semibold'>Sweets & Cakes</h1>
                        </div>
                        <p className='text-slate-400 mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Element