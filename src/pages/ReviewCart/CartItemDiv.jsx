import React from 'react';

const CartItemDiv = ({product}) => {
    const {name,size,quantity,buyingprice} = product;
    return (
        <div className='grid grid-cols-3 text-[#666666] font-medium my-2'>
            <p>{name}({size})</p>
            <p className='text-center font-thin text-sm'>Quantiy <span className='bg-[#E8E8E8] text-sm rounded-md p-1 ml-8'>{quantity}</span></p>
            <p className='text-right'>{buyingprice}</p>
        </div>
    );
};

export default CartItemDiv;