import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const {loginwithEmailPass}=useContext(AuthContext);
    const location =useLocation()
    const navigate =useNavigate()
    console.log(location)
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();


    const showPassHandler = () => {
        if (showPass === false) {
            setShowPass(true);
        } else {
            setShowPass(false)
        }
    }


    const onSubmit = (data) => {
        console.log(data)
        loginwithEmailPass(data.email,data.password)
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Account login Success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from, { replace: true });
            
        })
        .catch(err=>{
            console.log(err.message)
        })
    }


    return (
        <div>
            <h1 className='text-center text-7xl font-semibold m-10 '>Login to <br /> go Next Step</h1>
            <div className='md:w-1/2 w-full md:mx-auto  shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-green-200 p-10 rounded-xl mb-10'>
                    <h1 className='text-center text-3xl font-bold'>Login</h1>
                    <div className='mt-5'>
                        <label className='text-base font-bold' htmlFor="email">Email</label><br />
                        <input {...register("email")} className='w-full p-2 rounded-md' type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='mt-4'>
                        <label className='text-base font-bold' htmlFor="password">Password</label><br />
                        <input {...register("password")} className='w-full rounded-md p-2' type={showPass === false ? "password" : "text"} placeholder='Enter Your password' />
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
                        {/* todo:social media login */}
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