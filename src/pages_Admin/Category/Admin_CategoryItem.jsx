import React, { useState } from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';

import Admin_categoryItem_action from './Admin_categoryItem_action';

const Admin_CategoryItem = ({ category, count,handleStatusChange,handleCategoryDelete }) => {
    const { category_name, category_slug, img, isActive, path, sub_category } = category;
    const [toggleSwitchState, setToggleSwitchState] = useState(isActive);


    const handleToggleSwitchStatusChange =status=>{
        setToggleSwitchState(status);
        handleStatusChange(category_slug,status);

    }



    return (

        <div className="w-[700px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1150px] 3xl:w-[1300px] mx-auto grid grid-cols-11 text-[#434343] bg-white hover:bg-slate-100 text-base py-2 border-b">
            <div className="col-span-3 grid grid-cols-5 justify-center items-center  text-center">
                <div className="col flex justify-center">{count}</div>
                <div className="col-span-4 flex justify-center items-center">
                    <img src={img} alt={category_name} className='w-10 h-10' />
                </div>

            </div>
            <div className="col-span-2 flex justify-center items-center text-center">{category_name}</div>
            <div className="col-span-2 flex justify-center items-center text-center">{sub_category && sub_category.length}</div>
            {/* toggle switch  */}
            <div className="col-span-2 flex justify-center items-center" >
                {
                    toggleSwitchState ?
                        <MdToggleOn className='text-root-100 text-5xl  cursor-pointer' onClick={()=>handleToggleSwitchStatusChange(!toggleSwitchState)} />
                        :
                        <MdToggleOff className='text-red-500 text-5xl cursor-pointer' onClick={()=>handleToggleSwitchStatusChange(!toggleSwitchState)} />

                }
            </div>

            {/* action button  */}
            <div className="col-span-2 flex justify-center  items-center cursor-pointer">
                <Admin_categoryItem_action category_slug={category_slug} handleCategoryDelete={handleCategoryDelete}/>
                {/* Action <BsChevronDown className='ml-1 text-[#494949] text-base' /> */}
                </div>

        </div>

    );
};

export default Admin_CategoryItem;