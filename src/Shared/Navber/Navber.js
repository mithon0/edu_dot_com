import React, { useContext, useState } from 'react';
import logo from "../../asset/images/logo.png";
import { Link } from 'react-router-dom';
import { FaBars, FaPhoneAlt, FaTimes, FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navber = () => {
const [isOpen,setIsOpen]=useState(false);
const [Profile,setProfile]=useState(false);
const {user,logOut}=useContext(AuthContext)
const dropHandlear=()=>{
        if(isOpen===true){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
};

        const profileHandler =()=>{
            if(Profile===true){
                setProfile(false)
            }else{
                setProfile(true)
            }
        };

        //**logout**\
        const logoutHander=()=>{
            logOut()
            
        };
        
    const dropdown =
        <div className='w-full' >
            <ul className='font-semibold'>
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm'><Link to="/">Home</Link></li>
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm'><Link to="/about">About</Link></li>
                
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm'><Link to='/favorite'>Favorite Course</Link></li>
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm'><Link>Pages</Link></li>
                
                <li className='hover:bg-blue-300 border-none p-2 w-28 rounded-sm '><Link>Shop</Link></li>

            </ul>
        </div>

    return (
       <div className=''>
         <div className='flex items-center md:gap-2 justify-between  '>
            <div className='flex items-center justify-start'>
                <img className='w-20' src={logo} alt="" />
                <h2 className=' text-3xl font-bold text-red-500'>edu.<span className='text-green-600'>Com</span></h2>
            </div>
            <div className='md:mx-auto ' >
                <ul className='md:flex gap-4 hidden'>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm '><Link>Home</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm'><Link to="/about">About</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm'><Link to='/favorite'>Favorite Course</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2  rounded-sm'><Link>Pages</Link></li>
                    <li className='hover:bg-blue-300 border-none p-2 rounded-sm '><Link>Shop</Link></li>
                    <div className='flex gap-2 items-center text-2xl text-white bg-black p-2 rounded-full'>
                        
                       {
                        user? <FaUserAlt onClick={profileHandler} className='hover:text-blue-500' />:<Link className='px-2 bg-slate-700 rounded-lg text-white font-bold' to="/signup">Join For Free</Link>
                       }
                        {
                            Profile && user? <div>
                            <ul>
                                <li>
                                    <Link className='bg-blue-400 text-white rounded-xl px-3 ' to="/profile">Profile</Link>
                                    <button onClick={logoutHander} className='px-3  bg-red-700 rounded-xl ms-1'>LogOut</button>
                                </li>
                            </ul>
                        </div>:<></>
                        }
                       
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
                    {
                        isOpen===false?<button onClick={dropHandlear}><FaBars/></button>:<button onClick={dropHandlear}><FaTimes/></button>
                    }
                  
            </div></div>
             <div className=' '>
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