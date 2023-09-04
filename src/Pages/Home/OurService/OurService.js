import React from 'react';
import { FaArrowRight, FaFilm, FaGraduationCap, FaNetworkWired, FaRegLightbulb } from "react-icons/fa";

const OurService = () => {
    

    return (
        <div className='relative'>
            <div className=''>
                <img className='h-screen w-screen md:block hidden ' src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" alt="" />
                <div className='w-screen h-20 bg-orange-400'></div>

            </div>
            <div className='md:absolute md:top-40  md:left-[500px] '>
                <h3 className='text-center text-2xl text-orange-600'>---Our service--- </h3>
                <p className='text-center text-3xl font-bold'>Creating a life long Learning <br /> best community </p>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-1 md:mx-20 mx-2 md:absolute md:top-80 '>
                {/* Card 1 */}
                <div className='border rounded-xl bg-white  mx-2'>
                    <div className='p-5 bg-slate-500 rounded-b-full'>
                        {/* icon */}

                        <FaGraduationCap className='text-7xl mx-auto mt-0 text-orange-500 rounded-b-full'></FaGraduationCap>

                    </div>
                    <h4 className='text-xl mt-2 text-center font-semibold'>Exclusive Coach</h4>
                    <p className='ps-5 text-slate-600 text-sm mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.!</p>
                    <hr />
                    <div className='flex justify-center mt-3'>
                        <button className='border px-3 py-1 mb-2 rounded-lg flex items-center gap-3'>Read More <FaArrowRight /> </button>
                    </div>

                </div>
                {/* Card 2 */}
                <div className='border rounded-xl bg-white  mx-2'>
                    <div className='p-5 bg-slate-500 rounded-b-full'>
                        {/* icon */}

                        <FaRegLightbulb className='text-7xl mx-auto mt-0 text-orange-500 rounded-b-full'></FaRegLightbulb>

                    </div>
                    <h4 className='text-xl mt-2 text-center font-semibold'>Creative Minds</h4>
                    <p className='ps-5 text-slate-600 text-sm mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.!</p>
                    <hr />
                    <div className='flex justify-center mt-3'>
                        <button className='border px-3 py-1 mb-2 rounded-lg flex items-center gap-3'>Read More <FaArrowRight /> </button>
                    </div>

                </div>
                {/* Card 3 */}
                <div className='border rounded-xl bg-white  mx-2'>
                    <div className='p-5 bg-slate-500 rounded-b-full'>
                        {/* icon */}

                        <FaFilm className='text-7xl mx-auto mt-0 text-orange-500 rounded-b-full'></FaFilm>

                    </div>
                    <h4 className='text-xl mt-2 text-center font-semibold'>Video tutorial</h4>
                    <p className='ps-5 text-slate-600 text-sm mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.!</p>
                    <hr />
                    <div className='flex justify-center mt-3'>
                        <button className='border px-3 py-1 mb-2 rounded-lg flex items-center gap-3'>Read More <FaArrowRight /> </button>
                    </div>

                </div>
                {/* card 4 */}
                <div className='border rounded-xl bg-white  mx-2'>
                    <div className='p-5 bg-slate-500 rounded-b-full'>
                        {/* icon */}

                        <FaNetworkWired className='text-7xl mx-auto mt-0 text-orange-500 rounded-b-full'></FaNetworkWired>

                    </div>
                    <h4 className='text-xl mt-2 text-center font-semibold'>World Record</h4>
                    <p className='ps-5 text-slate-600 text-sm mt-5 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.!</p>
                    <hr />
                    <div className='flex justify-center mt-3'>
                        <button className='border px-3 py-1 mb-2 rounded-lg flex items-center gap-3'>Read More <FaArrowRight /> </button>
                    </div>

                </div>



            </div>
            
        </div>
    );
};

export default OurService;