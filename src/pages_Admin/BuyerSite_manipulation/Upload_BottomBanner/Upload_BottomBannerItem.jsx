import React, { useState } from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import {BsTrash} from 'react-icons/bs'
const Upload_BottomBannerItem = ({ banner, count, handleStatusChange, handleBannerDelete }) => {
    const { _id, img, isActive } = banner;

    const [toggleSwitchState, setToggleSwitchState] = useState(isActive);


    const handleToggleSwitchStatusChange = status => {
        setToggleSwitchState(status);
        handleStatusChange(_id, status);

    }
    return (
       
        <div className="w-full max-w-5xl mx-auto py-2 grid grid-cols-5 text-[#A3A3A3] text-lg hover:bg-slate-100 border-b">
            <div className="col-span-3 grid grid-cols-5 justify-center items-center">
                <div className="col flex justify-center">{count}</div>
                <div className="col-span-4 flex justify-center">
                    <img src={img} alt="banner item" className="w-24 h-18 md:w-36 md:h-20" />
                </div>

            </div>
            <div className="col-span-1 flex justify-center items-center">

                {
                    toggleSwitchState ?
                        <MdToggleOn className='text-root-100 text-5xl  cursor-pointer' onClick={() => handleToggleSwitchStatusChange(!toggleSwitchState)} />
                        :
                        <MdToggleOff className='text-red-500 text-5xl cursor-pointer' onClick={() => handleToggleSwitchStatusChange(!toggleSwitchState)} />

                }

            </div>
            <div className="col-span-1 flex justify-center items-center">
                <BsTrash className='text-red-500 text-xl cursor-pointer' onClick={()=>handleBannerDelete(_id)}/>

            </div>

        </div>
    );
};

export default Upload_BottomBannerItem;