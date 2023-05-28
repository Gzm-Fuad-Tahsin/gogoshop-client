import React, { useEffect, useState } from "react";
import ReviewCart from "./ReviewCart";
import CartItem from "./CartItem";
import { BsFillGiftFill } from "react-icons/bs";

const ReviewCarts = () => {

  // Customer Information from json data
  const [customerInfo, setCustomerInfo] = useState([]);
  useEffect(() => {
    fetch("customerInfo.json")
      .then((res) => res.json())
      .then((data) => setCustomerInfo(data));
  }, []);

  // Products Information which is in cart after add to cart
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("table.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  // Calculation for total price
  const [totalValue, setTotalValue] = useState(0);
    useEffect(() => {
      let sum = 0;
      const tableRows = document.querySelectorAll('#table1 tbody tr');
      console.log(tableRows);
      tableRows.forEach(row => {
        const value = parseInt(row.querySelector('td:last-child').textContent);
        console.log(value);
        sum += value;
      });
      setTotalValue(sum);
    }, []);

  return (
    <>
      <div className="m-5 lg:m-24">
        
        <ReviewCart customerInfo={customerInfo}></ReviewCart>
        
        <hr className="my-10" />

        <div>
          {products.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </div>

      <div>
      <table className="table content-center">
        <tbody>
          <tr>
            <td className="text-[#111111] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 w-[1000px]">Shipping Charge</td>
            <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">168.55</td>
          </tr>
        </tbody>
      </table>

      <hr className="my-10" />

      <table className="table content-center my-8">
        <tbody>
        <tr>
            <td className="text-[#111111] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">Subtotal</td>
            <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] lg:w-[608px] text-right">{totalValue}</td>
          </tr>
          <tr>
          <td className="flex items-center text-[#4ABA6F] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 bg-[#F7F7F7] rounded-[20px] px-8"><BsFillGiftFill></BsFillGiftFill><input type="text" name="" id="" placeholder="Coupon Code" className="lg:w-[235px] text-black mx-6 rounded-[10px] px-3 py-1" />Apply Coupon</td>
          <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 text-right">168.55</td>
          </tr>
        </tbody>
      </table>

      <hr className="border-1 border-black my-10" />

      <table className="table content-center">
        <tbody>
        <tr>
            <td className="text-[#111111] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">Total Payment</td>
            <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 lg:w-[945px] text-right">168.55</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="mt-16">
      <input type="radio" name="radio-1" id="cashOn" className="radio radio-sm mr-8" />
      <label htmlFor="cashOn" className="font-bold">Cash on delivery</label>
      <br />
      <br />
      <input type="radio" name="radio-1" id="bkash" className="radio radio-sm mr-8" />
      <label htmlFor="bkash" className="font-bold">Pay with</label>
      <br />
      <br />
      <input type="radio" name="radio-1" id="nagad" className="radio radio-sm mr-8" />
      <label htmlFor="nagad" className="font-bold">Pay with</label>

      <div className="flex justify-center gap-32 my-14">
      <button className="w-[240px] h-[45px] bg-root-100 rounded-[20px] font-bold text-white text-lg shadow-lg">Update Cart</button>
      <button className="w-[240px] h-[45px] bg-root-100 rounded-[20px] font-bold text-white text-lg shadow-lg">Place Order</button>
      </div>
      </div>
      </div>
    </>
  );
};

export default ReviewCarts;
