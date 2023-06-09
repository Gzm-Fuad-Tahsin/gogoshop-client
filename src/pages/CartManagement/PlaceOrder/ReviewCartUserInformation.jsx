import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReviewCartUserInformation = () => {
  // name:'Hossain Ahamed',
  // phone:'01868726172',
  // email:'hossainahamed6872@gmail.com',
  // address:'Chasara,Narayanganj',
  // imgURL:'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/314023616_1627051114363680_2926308787731583629_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGUNmQzwi0BGZWuIFiFn1Qt4odC2zHAYuzih0LbMcBi7FRh7-saF1RdxjZdfj8DE-TmXGteOERxLKHrfCI-MeHG&_nc_ohc=3Opx3huQ7t8AX_efnLp&_nc_ht=scontent.fdac11-2.fna&oh=00_AfCpnv0YDRLN_8oAZBMmkJpPIqyrI7-3TM7qcNUuc72xfw&oe=6482F923'})

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
