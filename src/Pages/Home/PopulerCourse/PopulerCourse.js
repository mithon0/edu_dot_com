import React, { useEffect, useState } from 'react';
import PopulerCourseCard from './PopulerCourseCard';

const PopulerCourse = () => {
    const[course,setCourse]=useState([]);
    useEffect(()=>{
        fetch('Course.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])


    return (
       <div className='bg-indigo-100'>
        <h3 className='text-center pt-10 text-orange-700 text-2xl'>--------Peopuler Course------</h3>
        <h2 className='text-center text-4xl font-bold'>Feature Course on this month</h2>
         <div className='md:px-20 grid md:grid-cols-3 '>
           {
                course.map(c=><PopulerCourseCard
                key={c.course_id}
                course={c}
                ratings={c.ratings}
                ></PopulerCourseCard>)
           }
            
        </div>
       </div>
    );
};

export default PopulerCourse;