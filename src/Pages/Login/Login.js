import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const showPassHandler = () => {
        if (showPass === false) {
            setShowPass(true);
        } else {
            setShowPass(false)
        }
    }
    return (
        <div>
            <h1 className='text-center text-7xl font-semibold m-10 '>Login to <br /> go Next Step</h1>
            <div className='md:w-1/2 w-full md:mx-auto  shadow-2xl'>
                <form className='bg-green-200 p-10 rounded-xl mb-10'>
                    <h1 className='text-center text-3xl font-bold'>Login</h1>
                    <div className='mt-5'>
                        <label className='text-base font-bold' htmlFor="email">Email</label><br />
                        <input className='w-full p-2 rounded-md' type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='mt-4'>
                        <label className='text-base font-bold' htmlFor="password">Password</label><br />
                        <input className='w-full rounded-md p-2' type={showPass === false ? "password" : "text"} placeholder='Enter Your password' />
                    </div>
                    <div className='mt-5 flex gap-5'>
                        <input onClick={showPassHandler} className='bg-green-400 w-7 h-7' type="checkbox" />
                        <label className='items-center text-xl font-semibold' htmlFor="">Show Password</label>
                    </div>
                    <div className='mt-5'>
                        <button className='w-full text-white font-bold bg-green-900 p-2 rounded-lg'>Login Now</button>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-semibold'>Want to Create an Account? <Link className='text-blue-600' to="/signup">Signup</Link></h1>
                    </div>
                    <div className='flex gap-5'>
                        <hr className='border-2 w-full border-blue-900 my-5' />
                        <p className='items-center mt-2 font-bold'>Or</p>
                        <hr className='border-2 w-full border-blue-900 my-5' />
                    </div>
                    <div className='flex gap-20 justify-center '>
                        <button className='text-6xl text-blue-600'><FaFacebook /></button>
                        <button className='text-6xl text-red-600'><FaGoogle /></button>
                        <button className='text-6xl '><FaGithub /></button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;