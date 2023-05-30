import React, { useEffect, useState } from "react";
import CartItemDiv from "./CartItemDiv";
import { BsFillGiftFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import ReviewCartUserInformation from "./ReviewCartUserInformation";

const ReviewCartsDiv = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


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
        // console.log(data);
      });
  }, []);

  // Calculation for subtotal price
  let subtotal = 0;
  products.map(
    (item) =>
      (subtotal += parseFloat(item.buyingprice) * parseFloat(item.quantity))
  );

  return (
    <>
      <div className="  px-0 md:px-5 lg:mx-auto my-2 md:my-7">

        {/* Showing Customer Information from ReviewCartDiv.jsx */}
        <ReviewCartUserInformation customerInfo={customerInfo}></ReviewCartUserInformation>

        <hr className="my-2 md:my-5" />

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
        <div className=" text-[#666666] font-medium text-[8px] md:text-base ">

          <div className="grid grid-cols-12 mt-4 md:mt-6 mx-2 md:mx-5">
            <div className="col-span-8 md:col-span-7">
              <p className="text-black">Shipping Charge</p>
            </div>
            <div className="col-span-4 md:col-span-5 ">
              <p className="flex justify-end"><TbCurrencyTaka />150.55</p>
            </div>

          </div>
          <hr className="my-2 md:my-5" />


          <div className="grid grid-cols-12 mt-2 md:mt-5 mx-2 md:mx-5" aria-label="subtotal">
            <div className="col-span-8 md:col-span-7 " >
              <p className="text-black mr-3">Subtotal</p>
            </div>
            <div className="col-span-4 md:col-span-5 ">
              <p className="flex justify-end" ><TbCurrencyTaka />{subtotal}</p>
            </div>
          </div>


          <div className="grid grid-cols-12 justify-between items-center mt-2 md:mt-7 mr-2 md:mr-5" aria-label="coupon-discount">
            <div className="col-span-8 md:col-span-7 ">
              <p className="flex w-fit  items-center  text-[#4ABA6F] font-medium md:text-base border-0 bg-[#F7F7F7] rounded-md md:rounded-lg  px-2 lg:px-8 py-1 md:py-2 ">
                <BsFillGiftFill ></BsFillGiftFill>
                <input
                  type="text"
                  name=""
                  id="coupn-code"
                  placeholder="Coupon Code"
                  className=" text-black rounded-md md:rounded-lg px-2 md:px-4 py-1 mx-1 md:mx-3"
                />
               <span onClick={()=>console.log('tui gorib')}>Apply</span>
              </p>
            </div>
            <div className="col-span-4 md:col-span-5 ">
              <p className="flex justify-end items-center " ><span className="text-lg md:text-3xl">-</span><TbCurrencyTaka className="ml-2" />156</p>
            </div>
          </div>
          <hr className="my-2 md:my-5" />

          <div className="grid grid-cols-12 my-3 md:my-6 justify-between items-center  mx-2 md:mx-5" aria-label="total-charge-after-calculation">
            <div className="col-span-8 md:col-span-7 ">
              <p className="text-black">Total Payment</p>
            </div>
            <div className="col-span-4 md:col-span-5 ">
              <p className="flex justify-end py-3 " ><TbCurrencyTaka />154565</p>
            </div>

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
