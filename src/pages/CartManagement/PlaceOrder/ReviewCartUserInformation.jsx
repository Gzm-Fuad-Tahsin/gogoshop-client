import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReviewCartUserInformation = () => {

  const { user } = useContext(AuthContext);
  const { name, phone, address, email } = user;
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl text-gray-600 font-semibold">Billing information</h3>
        <Link className="pe-1 md:pe-5 text-blue-700 hover:underline" to='/update-profile'>
          Edit
        </Link>
      </div>
      <div className="text-[#666666] font-medium text-base px-1 md:px-5">

        <div className="mt-2 md:mt-0 grid grid-cols-5  items-start">
          <p className="text-gray-950 text-[1.1rem] md:text-base font-medium col-span-2 text-start">Deliver To</p>
          <p className="font-normal col-span-3 text-end">{name}</p>
        </div>

        <div className="mt-2 md:mt-0 grid grid-cols-5  items-start">
          <p className="text-gray-950 text-[1.1rem] md:text-base font-medium col-span-2 text-start">Delivery Address</p>
          <p className="font-normal col-span-3 text-end">{address}</p>
        </div>

        <div className="mt-2 md:mt-0 grid grid-cols-5  items-start">
          <p className="text-gray-950 text-[1.1rem] md:text-base font-medium col-span-2 text-start">Phone number</p>
          <p className="font-normal col-span-3 text-end">{phone}</p>
        </div>

        <div className="mt-2 md:mt-0 flex justify-between">
          <p className="text-gray-950 text-[1.1rem] md:text-base font-medium ">Email</p>
          <p className="font-normal">{email}</p >
        </div>

      </div>


    </>
  );
};

export default ReviewCartUserInformation;
