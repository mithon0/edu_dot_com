import React from 'react';
import "../OurTeam/OurTeam.css"
const OurTeam = () => {
    return (
        <div>
           <div className='text-center'>
            <h3 className='text-red-700 text-xl'>-----Our Team-----</h3>
            <h1 className='text-3xl font-semibold'> 
                Meet Our Professional Team <br />Members
            </h1>
            </div> 
            <div className='grid md:grid-cols-3 grid-cols-1 md:mx-36 mx-14  mt-10 mb-10'>
                    <div className='mx-4 relative rounded-lg'>
                        <img className='image rounded-lg md:mt-0 mt-3 ' src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                        <div className='content text-white rounded-lg absolute top-0 left-0 flex flex-col justify-center '>
                            <h1 className='text-2xl font-bold text-center'>Jhone Smith</h1>
                            <h3 className='text-sm  font-semibold text-center'>Web Developer</h3>
                        </div>
                    </div>
                    <div className='mx-4 relative rounded-lg md:mt-0 mt-3'>
                        <img className='image rounded-lg ' src="https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                        <div className='content text-white rounded-lg absolute top-0 left-0 flex flex-col justify-center '>
                            <h1 className='text-2xl font-bold text-center'>Devon lane</h1>
                            <h3 className='text-sm  font-semibold text-center'>Graphic Designer</h3>
                        </div>
                    </div>
                    <div className='mx-4 relative rounded-lg md:mt-0 mt-3'>
                        <img className='image rounded-lg ' src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                        <div className='content text-white rounded-lg absolute top-0 left-0 flex flex-col justify-center '>
                            <h1 className='text-2xl font-bold text-center'>Rose Lona</h1>
                            <h3 className='text-sm  font-semibold text-center'>Management Expert</h3>
                        </div>
                    </div>
                   
            </div>
        </div>
    );
};

export default OurTeam;