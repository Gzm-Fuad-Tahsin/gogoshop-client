import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ReviewCartUserInformation = () => {
    // name:'Hossain Ahamed',
    // phone:'01868726172',
    // email:'hossainahamed6872@gmail.com',
    // address:'Chasara,Narayanganj',
    // imgURL:'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/314023616_1627051114363680_2926308787731583629_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGUNmQzwi0BGZWuIFiFn1Qt4odC2zHAYuzih0LbMcBi7FRh7-saF1RdxjZdfj8DE-TmXGteOERxLKHrfCI-MeHG&_nc_ohc=3Opx3huQ7t8AX_efnLp&_nc_ht=scontent.fdac11-2.fna&oh=00_AfCpnv0YDRLN_8oAZBMmkJpPIqyrI7-3TM7qcNUuc72xfw&oe=6482F923'})

    const {user} = useContext(AuthContext);
    const {name,phone,address,email} = user;
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl text-gray-600 font-semibold">Billing information</h3>
        <Link className="pe-1 md:pe-5 text-blue-700 hover:underline" to='/update-profile'>
          Edit
        </Link>
      </div>
      <div className="text-[#666666] font-medium text-base px-1 md:px-5">

        <div className="flex justify-between items-center">
          <p>Deliver To</p>
          <p>{name}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p>Delivery Address</p>
          <p>{address}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>Phone number</p>
          <p>{phone}</p>
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
