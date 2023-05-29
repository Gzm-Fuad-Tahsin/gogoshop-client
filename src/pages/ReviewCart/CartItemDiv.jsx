import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const CartItemDiv = ({ product }) => {
  const { name, size, quantity, buyingprice } = product;
  return (
    <div className="grid grid-cols-3 text-[#666666] font-medium text-[8px] md:text-base my-2">
      <p>
        {name}({size})
      </p>
      <p className="text-right md:text-center font-thin text-[8px] md:text-sm">
        Quantiy{" "}
        <span className="bg-[#E8E8E8] rounded-md p-1 ml-2 md:ml-8">
          {quantity}
        </span>
      </p>
      <p className="flex justify-end"><TbCurrencyTaka />{buyingprice}</p>
    </div>
  );
};

export default CartItemDiv;
