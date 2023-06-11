import React, { useContext } from 'react';
import { MdOutlineLocationCity, MdCall, MdEmail } from 'react-icons/md';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';

const UserProfile = ({ setShowUserPage, handlePageLoad }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <ScrollToTop />
            <div className=' w-full md:w-[520px] lg:w-[780px] xl:w-[950px] 2xl:w-[1200px] 3xl:w-[1380px] 4xl:w-[1600px] 5xl:w-[1850px] mx-auto  px-2 md:px-4 mb-28 md:mb-40'>
                {/* https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg */}
                <div className="mx-auto mt-10 mb-10 md:flex block items-center">
                    <img className='rounded-xl md:mr-8 w-20 mx-auto md:mx-0' src={user?.imgURL} />
                    <div className='text-center md:text-start md:mt-0 mt-6'>
                        <p>{user?.name}</p>
                        <p className='text-sm hover:underline cursor-pointer text-gray-400'>{user?.id}</p>
                    </div>
                </div>
                <div className=' mt-12'>
                    <div className='flex items-start'>
                        <MdOutlineLocationCity className='text-[25px] pr-2' />
                        <p className='text-lg'>Address: <span className='text-gray-500'>{user?.address}</span></p>
                    </div>
                    <div className='flex items-start mt-6'>
                        <MdCall className='text-[25px] pr-2' />
                        <p className='text-lg'>Phone: <span className='text-gray-500'>{user?.phone}</span></p>
                    </div>
                    <div className='flex items-start mt-6 '>
                        <MdEmail className='text-[25px] pr-2' />
                        <p className='text-lg'>Email: <span className='text-gray-500 text-sm truncate '>{user?.email}</span></p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default UserProfile;