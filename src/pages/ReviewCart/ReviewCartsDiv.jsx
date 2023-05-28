import React, { useEffect, useState } from 'react';
import ReviewCartDiv from './ReviewCartDiv';
import CartItemDiv from './CartItemDiv';
import { BsFillGiftFill } from "react-icons/bs";

const ReviewCartsDiv = () => {
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

  let total = 0;
  products.map (item => total+= (parseFloat(item.buyingprice) * (parseFloat(item.quantity))))

    return (
        <>
        <div className='m-16 w-full lg:w-[900px] mx-auto'>
        <ReviewCartDiv customerInfo={customerInfo}></ReviewCartDiv>

        <hr className='my-8' />

        <div>
          {products.map((product) => (
            <CartItemDiv key={product.id} product={product}></CartItemDiv>
          ))}
        </div>
        <div className='grid grid-cols-2 text-[#666666] font-medium'>
        <div className='mt-3'>
            <p className='text-black'>Shipping Charge</p>
            <hr className='my-8' />
            <p className='text-black'>Subtotal</p>
            <p className="flex items-center text-[#4ABA6F] font-light text-lg border-0 bg-[#F7F7F7] rounded-xl px-8 py-2 mt-6"><BsFillGiftFill></BsFillGiftFill><input type="text" name="" id="" placeholder="Coupon Code" className="text-black mx-1 rounded-lg px-3 py-1" />Apply Coupon</p>
            <hr className='my-8' />
            <p className='text-black'>Total Payment</p>
        </div>
        <div className='text-right mt-3'>
            <p>150.55</p>
            <hr className='my-8' />
            <p>{total}</p>
            <p className='py-3 mt-6'>1565</p>
            <hr className='my-8' />
            <p>65657</p>
        </div>
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
      <button className="w-[240px] h-[45px] bg-root-100 rounded-2xl font-bold text-white text-lg shadow-lg">Update Cart</button>
      <button className="w-[240px] h-[45px] bg-root-100 rounded-2xl font-bold text-white text-lg shadow-lg">Place Order</button>
      </div>
      </div>
        </div>
        </>
    );
};

export default ReviewCartsDiv;