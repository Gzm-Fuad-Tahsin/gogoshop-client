import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const OrderedItemInformation = ({ product }) => {
  const { name, size, quantity, buyingprice } = product;
  return (
    <>
    <div className="grid grid-cols-8 md:grid-cols-3 text-[#666666] font-medium text-base my-2">
      <p className="col-span-4 md:col-span-1">
        {name}({size})
      </p>
      <p className="col-span-2 md:col-span-1 text-center  font-thin text-sm">
        <span className="hidden md:inline">Quantity{" "}</span>
        
        <span className="bg-transparent md:bg-[#E8E8E8] rounded-md p-0 md:p-1  md:ml-3">
          {quantity}
        </span>
      </p>
      <p className="col-span-2 md:col-span-1 flex justify-end items-center"><TbCurrencyTaka />{buyingprice}</p>
    </div>
    </>
  );
};

export default OrderedItemInformation;
