import React from "react";

const OrderInfo = ({ orderInfo }) => {
  const { orderNo, orderDate, deliveryDate, paidThrough } = orderInfo;
  return (
    <>
      <div className="grid grid-cols-2 text-[#666666] font-medium text-[8px] md:text-base">
        <div>
          <p>Order number</p>
          <p className="my-3">Order placed on </p>
          <p>Estimated delivery date</p>
        </div>
        <div className="text-right">
          <p>{orderNo}</p>
          <p className="my-3">{orderDate}</p>
          <p>{deliveryDate}</p>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
