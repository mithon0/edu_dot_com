import React from 'react';
import about from '../../../asset/images/aboutsectionimg.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChalkboardTeacher, FaCheck } from "react-icons/fa";
const AboutSection = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <div>
                <img className='w-[400px] mx-auto mt-20' src={about} alt="" />
            </div>
            <div className='md:w-[600px] mt-10 mb-10 mx-2'>
                <Link className='text-blue-700 font-semibold'>About us </Link>
                <h2 className='font-bold text-4xl text-indigo-950 mt-5'>Establishing a community That Encourages Life long learning</h2>
                <p className='text-sm text-slate-500 mt-10'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iusto tempore dignissimos distinctio atque. Earum quidem voluptatem in quod asperiores!
                </p>
                <div className='bg-red-200 rounded-lg relative mt-5'>
                    <div className='bg-orange-600 rounded-lg w-1/3 '>
                        <h3 className='text-white ms-10 pt-2 '>Flexiable Classes</h3>
                        <FaChalkboardTeacher className='text-5xl ms-2 text-white'/>
                    </div>
                    <div className='absolute top-8 left-16 rounded-s-full bg-red-200 '>
                            <p className='text-sm ps-4 py-1 text-slate-700 '>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet c  orem ipsum dolor sit amet Lorem ipsum dolor sit amet cconsectetur adipisicing elit. Asperiores, debitis.</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center mt-10'>
                    <div className=''>
                        <h2 className='flex gap-5 items-center'>
                            <FaCheck className='p-2 rounded-full text-4xl text-white bg-blue-800'/> <span className='text-2xl font-semibold'>Free Incomming method</span>
                            
                            </h2>
                    </div>
                    <div>
                    <h2 className='flex gap-5 items-center'>
                            <FaCheck className='p-2 rounded-full text-4xl text-white bg-orange-600'/> <span className='text-2xl font-semibold'>Provide Best support</span>
                            
                            </h2>
                    </div>
                </div>
                <div className='flex gap-5 items-center mt-10'>
                    <div className=''>
                        <h2 className='flex gap-5 items-center'>
                            <FaCheck className='p-2 rounded-full text-4xl text-white bg-blue-800'/> <span className='text-2xl font-semibold'>Expart many teachers</span>
                            
                            </h2>
                    </div>
                    <div>
                    <h2 className='flex gap-5 items-center'>
                            <FaCheck className='p-2 rounded-full text-4xl text-white bg-orange-600'/> <span className='text-2xl font-semibold'>Lifetime Access</span>
                            
                            </h2>
                    </div>
                </div>
                <div className='mt-10 ms-5'>
                    <button className='px-3 py-1 bg-blue-800 text-white rounded-lg flex items-center gap-2'> Discover More <FaArrowRight/> </button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;