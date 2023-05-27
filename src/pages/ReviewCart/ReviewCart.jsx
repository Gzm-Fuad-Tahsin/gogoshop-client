import React from "react";
import { Link } from "react-router-dom";

const ReviewCart = ({info, product}) => {

    const {customerName, phone, deliveryAddress, billingAddress, email} = info;
    const {name,description,discountPrice,mainPrice,quantity,shippingCharge,discount,subtotal,coupon,total} = product;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table content-center">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#FFFFFF] w-[900px] text-[#666666] text-[18px] font-[500] border-0">Deliver to</th>
                <th className="bg-[#FFFFFF] w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{customerName}</th>
                <th className="bg-[#FFFFFF] w-[51px] text-[#666666] text-[18px] font-[500] border-0"></th>
              </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">Phone Number</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{phone}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">Delivery Address</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{deliveryAddress}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">Billing Address</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{billingAddress}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">Email</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{email}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="overflow-x-auto">
        <table className="table content-center">
            <tbody>
            {/* row 1 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">{name}</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">Delivery Address</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">Billing Address</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="w-[900px] text-[#666666] text-[18px] font-[500] border-0">Email</td>
              <td className="w-[170px] text-[#666666] text-[18px] font-[500] border-0 text-right">{}</td>
              <td className="w-[51px] text-[#205072] text-[18px] font-[500] border-0"><Link>Edit</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReviewCart;
