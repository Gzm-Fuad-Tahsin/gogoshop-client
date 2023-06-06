import React from "react";
import { Link } from "react-router-dom";

const ReviewCart = ({customerInfo}) => {

    const {customerName, phone, deliveryAddress, billingAddress, email} = customerInfo;
    

  return (
    <>
      <div className="">
        <table className="table content-center">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#FFFFFF] w-[500px] lg:w-[900px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 normal-case">Deliver to</th>
                <th className="bg-[#FFFFFF] w-[100px] lg:w-[170px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 text-right normal-case">{customerName}</th>
                <th className="bg-[#FFFFFF] w-[20px] lg:w-[51px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0"></th>
              </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
              <td className="w-[700px] lg:w-[900px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">Phone Number</td>
              <td className="w-[80px] lg:w-[170px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 text-right">{phone}</td>
              <td className="w-[30px] lg:w-[51px] text-[#205072] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="lg:w-[900px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">Delivery Address</td>
              <td className="lg:w-[170px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 text-right">{deliveryAddress}</td>
              <td className="lg:w-[51px] text-[#205072] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="lg:w-[900px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">Billing Address</td>
              <td className="lg:w-[170px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 text-right">{billingAddress}</td>
              <td className="lg:w-[51px] text-[#205072] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="lg:w-[900px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">Email</td>
              <td className="lg:w-[170px] text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 text-right">{email}</td>
              <td className="lg:w-[51px] text-[#205072] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0"><Link>Edit</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </>
  );
};

export default ReviewCart;
