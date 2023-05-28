import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCartDiv = ({customerInfo}) => {
    const {customerName, phone, deliveryAddress, billingAddress, email} = customerInfo;
    return (
        <>
        <div className='grid grid-cols-2'>
        <div className='text-[#666666] font-medium text-sm md:text-base'>
            <p>Deliver To</p>
            <p className='my-2'>Phone number</p>
            <p>Delivery Address</p>
            <p className='my-2'>Billing Address</p>
            <p>Email</p>
        </div>
        <div className='text-right text-[#666666] font-medium text-sm md:text-base'>
            <p className='mr-16'>{customerName}</p>
            <p className='my-2'>{phone} <Link className='ml-6 text-[#205072] font-medium text-sm md:text-base'>Edit</Link></p>
            <p>{deliveryAddress} <Link className='ml-6 text-[#205072] font-medium text-sm md:text-base'>Edit</Link></p>
            <p className='my-2'>{billingAddress} <Link className='ml-6 text-[#205072] font-medium text-sm md:text-base'>Edit</Link></p>
            <p>{email} <Link className='ml-6 text-[#205072] font-medium'>Edit</Link></p>
        </div>
        </div>
        </>
    );
};

export default ReviewCartDiv;