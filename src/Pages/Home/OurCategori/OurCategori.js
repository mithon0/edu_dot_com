import React from 'react';
import { FaBusinessTime } from "react-icons/fa";
const OurCategori = () => {
    return (

        <div className='bg-green-400 py-10'>
            <h1 className='text-center  text-xl text-red-700'>----Our Categories----</h1>
            <h3 className='text-center text-white text-4xl'>Favorite Topics To Learn</h3>
            <div className='grid md:grid-cols-4 grid-cols-1 mx-32 mt-5'>
                <div className='px-10 py-7 bg-white rounded-lg mx-2 md:my-0 my-4 '>
                    <FaBusinessTime className='text-7xl text-center mx-auto text-orange-500' />
                    <h3 className='text-center text-2xl font-bold'>Business <br /> Management</h3>
                </div>
                <div className='px-10 py-7 bg-white rounded-lg mx-2  md:my-0 my-4'>
                    <FaBusinessTime className='text-7xl text-center mx-auto text-orange-500' />
                    <h3 className='text-center text-2xl font-bold'>Business <br /> Management</h3>
                </div>
                <div className='px-10 py-7 bg-white rounded-lg mx-2 md:my-0 my-4'>
                    <FaBusinessTime className='text-7xl text-center mx-auto text-orange-500' />
                    <h3 className='text-center text-2xl font-bold'>Business <br /> Management</h3>
                </div>
                <div className='px-10 py-7 bg-white rounded-lg mx-2 md:my-0 my-4'>
                    <FaBusinessTime className='text-7xl text-center mx-auto text-orange-500' />
                    <h3 className='text-center text-2xl font-bold'>Business <br /> Management</h3>
                </div>
            </div>
        </div>


    );
};

export default OurCategori;