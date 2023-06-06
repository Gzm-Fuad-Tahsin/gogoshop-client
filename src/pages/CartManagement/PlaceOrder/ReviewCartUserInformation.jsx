import React from "react";
import { Link } from "react-router-dom";

const ReviewCartUserInformation = ({ customerInfo }) => {
  const { customerName, phone, deliveryAddress, billingAddress, email } =
    customerInfo;
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl text-gray-600 font-semibold">Billing information</h3>
        <Link className="pe-1 md:pe-5 text-blue-700 hover:underline">
          Edit
        </Link>
      </div>
      <div className="text-[#666666] font-medium text-base px-1 md:px-5">

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





      </div>


    </>
  );
};

export default ReviewCartUserInformation;
