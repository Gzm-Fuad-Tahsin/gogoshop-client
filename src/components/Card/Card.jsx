import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const handleCart = u_name => {
    console.log(u_name);
  }
  const { img, name, size, finalPrice, mainPrice, u_name } = product;
  return (
    <>

      <div className="card border-2 w-[140px] h-[180px] md:w-[200px] md:h-[320px] lg:w-[230px] lg:h-[340px] 2xl:w-[230px] 2xl:h-[340px]">
        <Link to={`/product/${size}`}>
          <figure>
            <img className="w-28 h-28 md:w-40 md:h-40 lg:w-44 lg:h-44 2xl:w-44 2xl:h-44" src={img} />
          </figure>
          <div className="px-3">
            <div className="md:my-5 lg:my-5 2xl:my-5">
              <h2 className="card-title text-[11px] md:text-xl lg:text-2xl 2xl:text-2xl font-normal">
                {name}
              </h2>
              <p className="text-[9px] md:text-[12px] lg:text-[13px] 2xl:text-[13px] text-[#A9A9A9]">
                {size}
              </p>

              <p className="flex text-[11px] md:text-[18px] lg:text-[20px] 2xl:text-[20px] text-[#807F7F]">
                <TbCurrencyTaka></TbCurrencyTaka>
                {finalPrice}
                {mainPrice && (
                  <s className="flex text-[11px] md:text-[13px] lg:text-[13px] 2xl:text-[13px] text-[#A9A9A9]">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {mainPrice}
                  </s>
                )}
              </p>
            </div>
          </div>
        </Link>
        <button onClick={() => handleCart(u_name)} className="btn btn-sm btn-circle bg-root-100 hover:bg-root-200 md:w-[190px] md:h-[46px]  lg:w-[220px] lg:h-[46px] 2xl:w-[220px] 2xl:h-[46px] border-0 rounded-[20px] md:font-medium md:text-[20px] lg:font-medium lg:text-[20px] 2xl:font-medium 2xl:text-[20px] normal-case absolute bottom-1 right-1 md:bottom-1 md:left-1 md:gap-2 lg:bottom-1 lg:left-1 lg:gap-2 2xl:bottom-1 2xl:left-1 2xl:gap-2">
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
          <span className="hidden md:block lg:block 2xl:block">Add to Cart</span>
          
        </button>
      </div>

    </>
  );
};

export default Card;
