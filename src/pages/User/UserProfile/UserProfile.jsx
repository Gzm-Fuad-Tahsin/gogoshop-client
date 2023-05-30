import React from 'react';
import { MdOutlineLocationCity, MdCall, MdEmail } from 'react-icons/md';

const UserProfile = ({setShowUserPage,handlePageLoad}) => {
    return (
        <div className='w-full lg:w-[900px] mx-auto px-2 md:px-4'>
            {/* https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg */}
            <div className="mx-auto mt-10 mb-10 md:flex block items-center">
                <img className='rounded-xl md:mr-8 w-20 mx-auto md:mx-0' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                <div className='text-center md:text-start md:mt-0 mt-6'>
                    <p>Farhan Hasan Nilok</p>
                    <p className='text-sm hover:underline cursor-pointer text-gray-400'>@nilok67</p>
                </div>
            </div>
            <div className=' mt-20'>
                <div className='flex items-center'>
                    <MdOutlineLocationCity className='text-[25px] mr-5' />
                    <p className='text-[18px]'>Address: <span className='text-gray-500'>Jamtola, Narayanganj </span></p>
                </div>
                <div className='flex items-center mt-6'>
                    <MdCall className='text-[25px] mr-5' />
                    <p className='text-[18px]'>Phone: <span className='text-gray-500'>01906913254</span></p>
                </div>
            <div className='flex items-center mt-6'>
                <MdEmail className='text-[25px] mr-5'/> 
                <p className='text-[18px]'>Email: <span className='text-gray-500'>gogoshop@noreply.com</span></p>
            </div>
            </div>
            
        </div>
    );
};

export default UserProfile;