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

      <div className="card border-2 w-[140px] h-[180px] md:w-[200px] md:h-[310px] lg:w-[220px] lg:h-[290px] hover:shadow-lg m-2">
        <Link to={`/product/${u_name}`}>
          <figure>
            <img className="w-28 h-28 md:w-40 md:h-40 lg:w-38 lg:h-38 p-2" src={img} />
          </figure>
          <div className="px-3">
            <div className="md:my-5 lg:my-1">
              <h2 className="card-title text-[11px] md:text-xl lg:text-lg font-normal">
                {name}
              </h2>
              <p className="text-[9px] md:text-xs text-[#A9A9A9]">
                {size}
              </p>

              <p className="flex text-[11px] md:text-lg text-[#807F7F]">
                <TbCurrencyTaka></TbCurrencyTaka>
                {finalPrice}
                {mainPrice && (
                  <s className="flex text-[11px] md:text-[13px] text-[#A9A9A9]">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {mainPrice}
                  </s>
                )}
              </p>
            </div>
          </div>
        </Link>
        <button onClick={() => handleCart(u_name)} className="btn btn-sm btn-circle bg-root-100 hover:bg-root-200 md:w-[190px] md:h-[38px] lg:w-[208px]  border-0 rounded-xl md:font-medium md:text-xl normal-case absolute bottom-1 right-1 md:bottom-1 md:left-1 md:gap-2">
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
          <span className="hidden md:block">Add to Cart</span>
        </button>
      </div>

    </>
  );
};

export default Card;
