/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import { BsTrash } from 'react-icons/bs';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';

import { toast } from 'react-hot-toast';


const IndividualProductBar = ({ product,handleDeleteCartItem,ItemQunatityChangeInCart }) => {
    const { product_id, name, img, size, slug_name, buyingprice, quantity } = product;
    
   
    
    const [Updatedquantity, setUpdatedquantity] = useState(quantity);




    useEffect(() => {
        ItemQunatityChangeInCart({ product_id, Updatedquantity })
    }, [Updatedquantity])





    const handleIncrease = () => {
        // 20 will be replaced by "available product ammount"
        if (parseInt(Updatedquantity) >= 20) {
            toast.error('Maximum product Added');
            return;
        }
        setUpdatedquantity(parseInt(Updatedquantity) + 1);
    }


    const handledecrease = () => {
        if (parseInt(Updatedquantity) <= 1) {
            toast.error('Product less than 1');
            return;
        }
        setUpdatedquantity(parseInt(Updatedquantity) - 1);
    }

   
    return (
        <div className='h-24 my-3 grid grid-cols-12 border-b'>



            {/* item price size____________________ */}
            <div className="pl-1 md:pl-2 col-span-7 md:col-span-5 flex">
                <div className="">
                    <img src={img} alt={name} className='h-20' />
                </div>
                <div className="pl-1 md:pl-2 flex flex-col justify-center items-start">
                    <p className='text-base font-semibold'> {name}</p>
                    <p className='text-xs text-gray-400'> {size}</p>
                    <p className='flex justify-center items-center md:hidden text-xs text-gray-400'>
                        <TbCurrencyTaka></TbCurrencyTaka>
                        {Updatedquantity * buyingprice}
                    </p>
                </div>
            </div>

            {/* quantity button and delete _____________ */}
            <div className="pr-2 col-span-5 md:col-span-4 grid grid-cols-12 items-center">
                <div className="col-span-2 md:col-span-2 cursor-pointer" onClick={() => handleDeleteCartItem({product_id})}>
                    <BsTrash className='text-root-100' />
                </div>

                <div className="col-span-10 md:col-span-10 p-1 md:p-2 rounded-md bg-shadow-100  flex justify-around items-center">
                    <button onClick={handledecrease}>
                        <CiSquareMinus className="text-3xl text-[#666666] " />
                    </button>
                    <div className="text-xl">
                        {
                            Updatedquantity

                        }
                    </div>
                    <button onClick={handleIncrease}>
                        <CiSquarePlus className="text-3xl text-[#666666] " />
                    </button>

                </div>



            </div>

            <div className="hidden md:col-span-3 md:flex justify-center items-center">{Updatedquantity * buyingprice}</div>
        </div>
    );
};

export default IndividualProductBar;