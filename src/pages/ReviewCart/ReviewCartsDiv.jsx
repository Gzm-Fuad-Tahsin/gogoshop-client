import React, { useEffect, useState } from "react";
import ReviewCartDiv from "./ReviewCartDiv";
import CartItemDiv from "./CartItemDiv";
import { BsFillGiftFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";

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

  // Calculation for total price
  let total = 0;
  products.map(
    (item) =>
      (total += parseFloat(item.buyingprice) * parseFloat(item.quantity))
  );

  return (
    <>
      <div className="w-[300px] md:w-[680px] lg:w-[900px] mx-auto my-8 md:my-20">

        {/* Showing Customer Information from ReviewCartDiv.jsx */}
        <ReviewCartDiv customerInfo={customerInfo}></ReviewCartDiv>

        <hr className="my-4 md:my-10" />

        {/* Showing Products Information in cart from CartItemDiv.jsx  */}
        <div>
          <h3 className="text-[10px] md:text-[20px] text-[#666666] font-medium">
            Products
          </h3>
          <div className="mx-2 md:mx-5">
            {products.map((product) => (
              <CartItemDiv key={product.id} product={product}></CartItemDiv>
            ))}
          </div>
        </div>

        {/* Showing Shipping Charge, Subtotal and Total Price */}
        <div className="grid grid-cols-2 text-[#666666] font-medium text-[8px] md:text-base mx-2 md:mx-5">
          <div className="mt-3">
            <p className="text-black">Shipping Charge</p>

            <hr className="my-4 md:my-10" />

            <p className="text-black">Subtotal</p>
            <p className="flex items-center text-[#4ABA6F] font-medium text-[6px] md:text-base border-0 bg-[#F7F7F7] rounded-xl px-2 lg:px-8 py-2 mt-6">
              <BsFillGiftFill></BsFillGiftFill>
              <input
                type="text"
                name=""
                id="coupn-code"
                placeholder="Coupon Code"
                className="text-black mx-1 rounded-lg px-1 lg:px-3 py-1"
              />
              Apply Coupon
            </p>

            <hr className="my-4 md:my-10" />

            <p className="text-black">Total Payment</p>
          </div>
          <div className="mt-3">
            <p className="flex justify-end"><TbCurrencyTaka />150.55</p>

            <hr className="my-4 md:my-10" />

            <p className="flex justify-end"><TbCurrencyTaka />{total}</p> 
            <p className="flex justify-end py-3 mt-6"><TbCurrencyTaka />1565</p>

            <hr className="my-3 md:my-10" />

            <p className="flex justify-end"><TbCurrencyTaka />65657</p>
          </div>
        </div>

        <div className="mt-8 md:mt-16">
          {/* Radion Buttons for Payment Method */}
          <div className="font-bold text-[10px] md:text-base">
            <div className="flex">
              <input
                type="radio"
                name="radio-1"
                id="cashOn"
                className="radio radio-xs md:radio-sm mr-2 md:mr-8"
              />
              <label htmlFor="cashOn">Cash on delivery</label>
            </div>

            <div className="flex my-2">
              <input
                type="radio"
                name="radio-1"
                id="bkash"
                className="radio radio-xs md:radio-sm mr-2 md:mr-8"
              />
              <label htmlFor="bkash">Pay with</label>
            </div>

            <div className="flex">
              <input
                type="radio"
                name="radio-1"
                id="nagad"
                className="radio radio-xs md:radio-sm mr-2 md:mr-8"
              />
              <label htmlFor="nagad">Pay with</label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-16 md:gap-32 my-14">
            <button className="w-[100px] h-8 md:w-[240px] md:h-[45px] bg-root-100 rounded-2xl font-light md:font-bold text-white text-xs md:text-lg shadow-lg">
              Update Cart
            </button>
            <button className="w-[100px] h-8 md:w-[240px] md:h-[45px] bg-root-100 rounded-2xl font-light md:font-bold text-white text-xs md:text-lg shadow-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCartsDiv;
