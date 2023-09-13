import React from 'react';

const DynamicSection = () => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-1 md:mx-32 mx-2 my-10 '>
            <div className='border-dashed mx-3 p-5 my-2  border-orange-600 border-4'>
                <h1 className='text-center text-5xl text-orange-500 font-bold'> 30.3k</h1>
                <p className='text-center text-sm text-slate-500 mt-2'> Student Enroled</p>
            </div>
            <div className='border-dashed mx-3 p-5 my-2 border-orange-600 border-4'>
                <h1 className='text-center text-5xl text-orange-500 font-bold'> 40.5k</h1>
                <p className='text-center text-sm text-slate-500 mt-2'> Class Completed</p>
            </div>
            <div className='border-dashed mx-3 p-5 my-2 border-orange-600 border-4'>
                <h1 className='text-center text-5xl text-orange-500 font-bold'> 89.9%</h1>
                <p className='text-center text-sm text-slate-500 mt-2'> Satisfaction Rate</p>
            </div>
            <div className='border-dashed mx-3 p-5 my-2 border-orange-600 border-4'>
                <h1 className='text-center text-5xl text-orange-500 font-bold'> 6.30+</h1>
                <p className='text-center text-sm text-slate-500 mt-2'> Top istructor</p>
            </div>
        </div>
    );
};

export default DynamicSection;