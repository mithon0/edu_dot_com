import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaMapMarkerAlt,FaPhoneAlt, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-indigo-900 text-indigo-200 grid md:grid-cols-4 grid-cols-1 p-20'>
            <div className='mx-auto'>
                <h1 className='text-2xl text-orange-500 ms-10 mb-2'>edu.<span className='text-blue-500'>Com</span></h1>
                <div>
                    <div className='flex gap-5 items-center'>
                        <FaMapMarkerAlt className='text-orange-400 '/>
                        <h4 className='text-base'>Jamalgonj ,Joypurhat /Rajshahi</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaPhoneAlt className='text-orange-400 '/>
                        <h4 className='text-base'>(+880)01759555317</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <FaEnvelope className='text-orange-400 '/>
                        <h4 className='text-base'>mithonhossen7244@gmail.com</h4>
                    </div>
                    
                </div>
                <div className='flex gap-10 mt-4 mx-auto'>
                    <FaFacebook/>
                    <FaLinkedin/>
                    <FaTwitter/>
                    <FaYoutube/>
                </div>
            </div>
            <div className='mx-auto'>
                <h1 className='text-2xl text-orange-500  mb-2'>Quick Links</h1>
                <div>
                    <div className='flex gap-5 items-center'>
                    
                        <h4 className='text-base'>Latest Course,</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                      
                        <h4 className='text-base'>Mission and Vision</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                       
                        <h4 className='text-base'>Our Approach</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                       
                        <h4 className='text-base'>Exclusive advisor</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                       
                        <h4 className='text-base'>Join A career</h4>
                    </div>
                    
                </div>
              
            </div>
            <div className='mx-auto'>
                <h1 className='text-2xl text-orange-500  mb-2'>Explore</h1>
                <div>
                    <div className='flex gap-5 items-center'>
                    
                        <h4 className='text-base'>About us</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                      
                        <h4 className='text-base'>Upcomming event</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                       
                        <h4 className='text-base'>Blog and News</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                       
                        <h4 className='text-base'>FAQ questions</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                       
                        <h4 className='text-base'>Testimonial</h4>
                    </div>
                    <div className='flex gap-5 items-center'>
                       
                        <h4 className='text-base'>privacy policy</h4>
                    </div>
                    
                </div>
              
            </div>
            
            
            <div>
            <h1 className='text-2xl text-orange-500  mb-2'>Galary</h1>
            <div className='grid grid-cols-3'>
                <img src="https://plus.unsplash.com/premium_photo-1671069848005-7231fc25703f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Footer;