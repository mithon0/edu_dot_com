import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const PopulerCourseCard = ({ratings,course}) => {
    const {images,instructor,price,duration,description,course_name,_id}=course;
    const [addFvorite,setAddFavorit]=useState(false);
    const [user,setUser]=useState(null)
    const navigate =useNavigate()
    
    const favoriteHandler =()=>{
        
        if(addFvorite===false ){
            
            
            if(user){
                setAddFavorit(true)
                fetch(`http://localhost:5000/users/${_id}`,{
                    method:"PATCH"
                
                })
                .then((res)=>{res.json()})
                .then((data)=>{console.log(data)})
            }else{
                navigate('/login')
            }

        }else{
            setAddFavorit(false)
        }
    }

    
    return (
        <div className='border mt-10 mb-10 bg-white rounded-lg mx-1'>
            <div className='bg-slate-300 rounded-b-full relative'>
                <img className='rounded-b-full mx-auto h-60' src={images} />
                <button onClick={favoriteHandler} className='absolute left-5 top-5'>
                    { addFvorite?
                        <FaHeart className='text-4xl text-red-700 '/>:<FaRegHeart  className='text-4xl text-red-700 '/>
                        }
                    </button>
            </div>
            <div className='mx-5'>
                <span className='bg-slate-800 text-white rounded-sm px-2 text-xs'>{duration}</span>
                {/* Ratings */}
                <div>
                    {
                        ratings === 5 ? <div className='text-yellow-600 flex'><FaStar /> <FaStar /> <FaStar /><FaStar /><FaStar /> </div> : <></>
                    }
                    {
                        ratings >= 4.5 && ratings < 5 ? <div className='text-yellow-600 flex'><FaStar /> <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div> : <></>
                    }
                    {
                        ratings >= 4 && ratings < 4.5 ? <div className='text-yellow-600 flex'><FaStar /> <FaStar /><FaStar /><FaStar /> <FaRegStar /></div> : <></>
                    }
                    {
                        ratings >= 3.5 && ratings < 4 ? <div className='text-yellow-600 flex'><FaStar /> <FaStar /> <FaStar />
                            <FaStarHalfAlt /> <FaRegStar /> </div> : <></>
                    }
                    {
                        ratings >= 3 && ratings < 3.5 ? <div className='text-yellow-600 flex'><FaStar /> <FaStar /> <FaStar /> <FaRegStar /><FaRegStar /></div> : <></>
                    }

                </div>
                {/* Ratings */}
                <div className=''>
                    <h1 className='text-2xl font-semibold'>{course_name}</h1>
                    <p className='text-sm font-medium text-slate-600 rounded-xl'>{description}</p>
                </div>
                <div className='bg-slate-300 flex gap-3 mb-5 py-2 mt-3'>
                    <img className='w-10 h-10 rounded-full items-center' src={images} alt="" />
                    <div className='items-center'>
                        <h3 className='text-lg font-bold'>{instructor}</h3>
                        <p className='text-xs font-semibold '>Project Manager</p>
                    </div>
                    <div className='ms-5 items-center'>
                        <h3 className='text-xl font-bold'>Price:{price}$</h3>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default PopulerCourseCard;