import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";

const Card = ({product}) => {
    const {img, name, description, discountPrice, mainPrice} = product;
    return (
        <>
        <div className="card border w-[140px] h-[180px] lg:w-[230px] lg:h-[340px]">
  <figure><img className='w-28 h-28 lg:w-44 lg:h-44' src={img} /></figure>
  <div className="px-3">
    <div className='lg:my-5'>
    <h2 className="card-title text-[11px] lg:text-2xl font-normal">{name}</h2>
    <p className='text-[9px] lg:text-[13px] text-[#A9A9A9]'>{description}</p>
    <p className='flex text-[11px] lg:text-[20px] text-[#807F7F]'><TbCurrencyTaka></TbCurrencyTaka>{discountPrice} <s className='flex text-[11px] lg:text-[13px] text-[#A9A9A9]'><TbCurrencyTaka></TbCurrencyTaka>{mainPrice}</s></p>
    </div>
  </div>
      <button className="btn btn-sm btn-circle bg-root-100 hover:bg-root-200 lg:w-[220px] lg:h-[46px] border-0 rounded-[20px] lg:font-medium lg:text-[20px] normal-case absolute bottom-1 right-1 lg:bottom-1 lg:left-1 lg:gap-2"><AiOutlineShoppingCart></AiOutlineShoppingCart><span className='hidden lg:block'>Add to Cart</span></button>
    
</div>
        </>
    );
};

export default Card;