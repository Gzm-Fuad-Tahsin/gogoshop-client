import React from "react";

const OrderInfo = ({ orderInfo }) => {
  const { orderNo, orderDate, deliveryDate, paidThrough } = orderInfo;
  return (
    <>
      <div className=" text-[#666666] text-base">
        <div className="flex justify-between">
          <p>Order number</p>
          <p>{orderNo}</p>
        </div>

        <div className="flex justify-between">
          <p className="my-3">Order placed on </p>
          <p className="my-3">{orderDate}</p>
        </div>

        <div className="flex justify-between">
          <p>Estimated delivery date</p>
          <p>{deliveryDate}</p>
        </div>



      </div>

  
    </>
  );
};

export default OrderInfo;
