import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

const Signup = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const [showPass, setShowPass] = useState(false);
    
    const { signUpEmailPass } = useContext(AuthContext)
    const showPassHandler = () => {
        if (showPass === false) {
            setShowPass(true);
        } else {
            setShowPass(false)
        }
    }

    // signup handlear

    const onSubmit = (data) => {
        console.log(data)
        if (data.password === data.confirmPassword) {

            signUpEmailPass(data.email, data.password)
                .then(res => {
                    console.log(res.user)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Account Created Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(err => console.log(err.message))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password not match',

            })
        }
    }

    return (
        <div>

            <div className='md:w-1/2 w-full md:mx-auto  shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-green-200 p-10 rounded-xl mb-10'>
                    <h1 className='text-center text-3xl font-bold'>SignUp/Register</h1>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-full'>
                            <label className='text-base font-bold' htmlFor="firstname">First Name</label><br />
                            <input {...register("firstName")} className='w-full p-2 rounded-md' type="text" placeholder='First name' />
                        </div>
                        <div className=' w-full'>
                            <label className='text-base font-bold' htmlFor="lastname">Last Name </label><br />
                            <input {...register("lastName")} className='w-full p-2 rounded-md' type="text" placeholder='Last name' />
                        </div>
                    </div>
                    <div className='flex gap-5 mt-5'>
                        <div className='w-full'>
                            <label className='text-base font-bold' htmlFor="gender">gender</label><br />
                            <select {...register("gender")} className='w-full p-2 rounded-md' name="gender" id="">
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div className=' w-full'>
                            <label className='text-base font-bold' htmlFor="lastname">Date Of Birth </label><br />
                            <input {...register("dateOfBirth")} className='w-full p-2 rounded-md' type="date" placeholder='date of birth' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label className='text-base font-bold' htmlFor="email">Email</label><br />
                        <input {...register("email")} className='w-full p-2 rounded-md' type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <div className='w-full'>
                            {/* todo make password validation with react form hook */}
                            <label className='text-base font-bold' htmlFor="password">Password</label><br />
                            <input {...register("password")} className='w-full rounded-md p-2' type={showPass === false ? "password" : "text"} placeholder='Enter Your password' />
                        </div>
                        <div className='w-full'>
                            <label className='text-base font-bold' htmlFor="password">Confirm Password</label><br />
                            <input {...register("confirmPassword")} className='w-full rounded-md p-2' type={showPass === false ? "password" : "text"} placeholder='Please Confirm Password' />
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5'>
                        <input onClick={showPassHandler} className='bg-green-400 w-7 h-7' type="checkbox" />
                        <label className='items-center text-xl font-semibold' htmlFor="">Show Password</label>
                    </div>
                    <div className='mt-5'>
                        <button className='w-full text-white font-bold bg-green-900 p-2 rounded-lg uppercase  '>register</button>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-semibold'>Already have an Account? <Link className='text-blue-600' to="/login">Login</Link></h1>
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

export default Signup;