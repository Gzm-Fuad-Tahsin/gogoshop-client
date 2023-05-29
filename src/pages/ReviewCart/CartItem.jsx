import React, { useEffect, useState } from "react";

const CartItem = ({ product }) => {
  console.log(product);
  const { name, size, quantity, buyingprice } = product;

  return (
    <>
      <div className="">
        <table id="table1" className="table">
          <tbody>
            {/* row 1 */}
            <tr className="p-0">
              <td className="w-[500px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] ">
                {name}
                {size}
              </td>
              <td className="w-[500px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] ">
                Quantity{" "}
                <span className="bg-[#E8E8E8] text-[16px] p-1 rounded-[8px] ml-10">
                  {quantity}
                </span>
              </td>
              <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] ">
                {buyingprice}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartItem;
