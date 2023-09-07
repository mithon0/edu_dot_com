import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#FBF6F0] w-full relative '>
            <img className='h-screen w-screen  ' src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className='absolute md:top-32 top-2  grid md:grid-cols-2 grid-cols-1'>
                <div className='md:ms-36 mr-11 mx-5 md:mx-auto mt-14'>
                    <h2 className='text-5xl font-bold text-indigo-950'>Come along as we begin Our learning journey</h2>
                    <p className='text-xs text-gray-500 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum expedita adipisci facere! Similique a voluptatum illum cum libero amet minima, ex culpa, dicta iste id dolores ducimus nihil! Iusto tempora aperiam nam quod a qui architecto. Sapiente at doloremque repellat obcaecati ex optio nulla, impedit quis, quaerat, mollitia officia.</p>
                    <button className='px-3 mb-5 py-1 mt-10 bg-orange-500 rounded-lg text-white hover:bg-orange-900'>Try For Free </button>
                </div>
                <div className='h-[100px] rounded-s-full'>
                    <img className='rounded-s-full border-white  border-[7px]' src="https://images.unsplash.com/photo-1514369118554-e20d93546b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;