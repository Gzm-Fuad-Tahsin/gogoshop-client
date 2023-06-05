import React from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";

const OrderItem = ({ orderData, redirectTo }) => {
    const { id, cart_img, item_name, time, price } = orderData;
    return (
        <Link to={redirectTo} className='flex justify-between items-center my-2.5 p-3 w-[300px] sm:w-[500px] md:w-[500px]  border border-gray-300 rounded-xl cursor-pointer'>
            <div className='flex justify-center items-center'>
                <img className='w-24 rounded-xl mr-5' src={cart_img} alt="" />
                <div>
                    <p className='font-semibold text-base md:text-lg'>{item_name}</p>
                    <p className='text-gray-400 text-sm'>{time}</p>
                </div>
            </div>
            <div className='flex items-center pr-0 md:pr-3'>
                <TbCurrencyTaka></TbCurrencyTaka> 
                <p className='font-semibold md:text-xl'>{price}</p>
            </div>
        </Link>
    );
};

export default OrderItem;