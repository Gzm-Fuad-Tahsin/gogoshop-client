import React, { useState } from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import Admin_ProductItem_action from './Admin_ProductItem_action';
const Admin_ProductItem = ({ count, product, handleStatusChange, handleProductDelete }) => {

    const { isActive, img, name, size, product_slug, subcategory, category,stock,buyingPrice, mainPrice, finalPrice } = product;

    const [toggleSwitchState, setToggleSwitchState] = useState(isActive);


    const handleToggleSwitchStatusChange =status=>{
        setToggleSwitchState(status);
        handleStatusChange(product_slug,status);

    }
    return (
        <div className="w-[1000px] 2xl:w-[1150px] 3xl:w-[1300px] mx-auto grid grid-cols-10 text-[#434343] bg-white hover:bg-slate-100 text-base py-2 border-b">
            <div className="col-span-1 grid grid-cols-5 justify-center items-center  text-center">
                <div className="col flex justify-center">{count}</div>
                <div className="col-span-4 flex justify-center items-center">
                    <img src={img} alt={name} className='w-10 h-10' />
                </div>

            </div>
            <div className="col-span-1 flex flex-col justify-center items-center text-center">
                <p>{name}</p>
                <p className='text-sm'>{size}</p>
            </div>
            <div className="col-span-1 flex justify-center items-center text-center">{category}</div>
            <div className="col-span-1 flex justify-center items-center text-center">{subcategory}</div>
            <div className="col-span-1 flex justify-center items-center text-center">{stock}</div>
            <div className="col-span-1 flex justify-center items-center text-center">{buyingPrice}</div>
            <div className="col-span-1 flex justify-center items-center text-center text-lg">{mainPrice}</div>
            <div className="col-span-1 flex justify-center items-center text-center">{finalPrice}</div>

            {/* toggle switch  */}
            <div className="col-span-1 flex justify-center items-center">
               
            {
                toggleSwitchState ?
                    <MdToggleOn className='text-root-100 text-5xl  cursor-pointer' onClick={()=>handleToggleSwitchStatusChange(!toggleSwitchState)} />
                    :
                    <MdToggleOff className='text-red-500 text-5xl cursor-pointer' onClick={()=>handleToggleSwitchStatusChange(!toggleSwitchState)} />

            }
      
            </div>
             {/* action button  */}
             <div className="col-span-1 flex justify-center  items-center cursor-pointer">
                <Admin_ProductItem_action product_slug={product_slug} handleProductDelete={handleProductDelete}/>
                {/* Action <BsChevronDown className='ml-1 text-[#494949] text-base' /> */}
                </div>

        </div>
    );
};

export default Admin_ProductItem;