import React, { useState } from 'react';
import logo from "../../asset/images/logo.jpg";
import { Link } from 'react-router-dom';
import { FaBars, FaPhoneAlt, FaSistrix, FaUserAlt } from "react-icons/fa";

const Navber = () => {
const [isOpen,setIsOpen]=useState(false);

const dropHandlear=()=>{
        if(isOpen===true){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
}

    const dropdown =
        <div className='w-32 bg-slate-300 ' >
            <ul className=''>
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm '><Link>Home</Link></li>
                
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm'><Link>Course</Link></li>
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm'><Link>Pages</Link></li>
                
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm '><Link>Shop</Link></li>

            </ul>
        </div>

    return (
       <div>
         <div className='flex items-center md:gap-2 justify-between'>
            <div className='flex items-center justify-start'>
                <img src={logo} alt="" />
                <h2 className=' text-3xl font-bold text-orange-500'>edu.<span className='text-blue-600'>Com</span></h2>
            </div>
            <div className='md:mx-auto ' >
                <ul className='md:flex gap-4 hidden'>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm '><Link>Home</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm'><Link to="/about">About</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm'><Link>Course</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm'><Link>Pages</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2 rounded-sm '><Link>Shop</Link></li>
                    <div className='flex gap-2 items-center text-2xl'>
                        <FaSistrix className='hover:text-blue-500' />
                        <FaUserAlt className='hover:text-blue-500' />
                    </div>
                </ul>

            </div>

            <div className='md:flex gap-5 bg-blue-800 rounded-s-full px-2 hidden'>
                <div className='rounded-full bg-white text-4xl p-5'>
                    <FaPhoneAlt></FaPhoneAlt>
                </div>
                <div className='items-center text-white mt-4 justify-end '>
                    <h4>(+880)1759555317</h4>
                    <h5>Call to questions</h5>
                </div>
            </div>
            <div className='  relative md:hidden font-bold mr-5 '>
                    <button onClick={dropHandlear}><FaBars/></button>
                  
            </div></div>
             <div className=' flex justify-end'>
             {
                     isOpen===true?<div className=''>
                     {dropdown}
                 </div>:<></>
                    }
             </div>
       </div>
    );
};

export default Navber;