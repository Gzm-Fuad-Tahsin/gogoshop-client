import React from "react";
import { Link } from "react-router-dom";

const ReviewCartUserInformation = ({ customerInfo }) => {
  const { customerName, phone, deliveryAddress, billingAddress, email } =
    customerInfo;
  return (
    <>
      <div className="text-[#666666] font-medium text-base ">
        <div className="flex justify-between items-center">
          <p>Deliver To</p>
          <p>{customerName}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="my-2">Phone number</p>
          <p className="my-2">{phone}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Delivery Address</p>
          <p>{deliveryAddress}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="my-2">Billing Address</p>
          <p className="my-2">{billingAddress}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Email</p>
          <p>{email}</p>
        </div>
        <div className="flex justify-end items-center">
          <Link className="ml-auto text- text-blue-700 hover:underline">
            Edit 
          </Link>
        </div>




      </div>


    </>
  );
};

export default ReviewCartUserInformation;
