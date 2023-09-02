import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaMapMarkerAlt,FaPhoneAlt, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-indigo-900 text-indigo-200 grid grid-cols-4 p-20'>
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
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Footer;