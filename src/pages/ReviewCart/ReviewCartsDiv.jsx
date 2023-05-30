import React, { useContext, useEffect, useState } from "react";
import { BsFillGiftFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import ReviewCartUserInformation from "./ReviewCartUserInformation";
import PageTitle from "../../components/PageTitle/PageTitle";
import ItemInfoDiv from "../../components/ItemInfoDiv/itemInfoDiv";
import { UtilityContext } from "../../Contexts/Utility/UtilityProvider";
import bkashlogo from '../../assets/icons/BKash-Logo 1.svg'
import rocketlogo from '../../assets/icons/rocket.svg'
import nagad from '../../assets/icons/Nagad-Logo 1.svg'
import mastercard from '../../assets/icons/Mastercard-Logo.wine.svg'
import visa from '../../assets/icons/Visa_Inc.-Logo.wine.svg'


const ReviewCartsDiv = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  const { screenWidth } = useContext(UtilityContext);

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
      <PageTitle text='Place Order' />
      <div className=" w-full lg:w-[900px] mx-auto px-2 md:px-4 ">



        {/* Showing Customer Information from ReviewCartDiv.jsx */}
        <ReviewCartUserInformation customerInfo={customerInfo}></ReviewCartUserInformation>

        <hr className="my-2 md:my-5" />

        {/* Showing Products Information in cart from ItemInfoDiv.jsx  */}
        <div>
          <h3 className="text-lg text-[#666666] font-medium">
            Products
          </h3>
          {
            screenWidth < 768 &&
            <div className="grid grid-cols-8 md:grid-cols-3 text-[#666666] font-medium text-base my-2">
              <p className="col-span-4 md:col-span-1 font-semibold">Name</p>
              <p className="col-span-2 md:col-span-1 text-center  font-semibold">Quantity</p>
              <p className="col-span-2 md:col-span-1 flex justify-end items-center font-semibold">Price</p>
            </div>
          }
          <div className="px-2 md:px-5">
            {products.map((product) => (
              <ItemInfoDiv key={product.id} product={product}></ItemInfoDiv>
            ))}
          </div>
        </div>

        {/* Showing Shipping Charge, Subtotal and Total Price */}
        <div className=" text-[#666666] font-medium text-base ">

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

            <div className="col-span-8 md:col-span-7 relative">
              <form className="bg-[#F7F7F7] rounded-md md:rounded-lg  px-2 md:px-4 py-2 flex items-center">

                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BsFillGiftFill className="text-[#4ABA6F] text-xl" />
                  </div>
                  <input type="text" id="simple-search" className=" text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  " placeholder="Coupon" />
                </div>
                <button type="submit" className="p-2.5 md:px-4 ml-2 text-sm font-medium text-white  rounded-lg bg-root-100 ">
                  Apply
                </button>

              </form>
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
              <p className="flex justify-end items-center py-3 " ><TbCurrencyTaka />154565</p>
            </div>

          </div>

        </div>

        <div className="mt-8 md:mt-16 grid grid-cols-2">
          {/* Radio Buttons for Payment Method */}
          <div className="font-bold text-sm">
            <div className="flex  mb-3">
              <input
                type="radio"
                name="radio-1"
                id="cashOn"
                className="radio radio-xs md:radio-sm mr-2 md:mr-4"
              />
              <label htmlFor="cashOn">Cash on delivery</label>
            </div>

            <div className="flex mb-3">
              <input
                type="radio"
                name="radio-1"
                id="bkash"
                className="radio radio-xs md:radio-sm mr-2 md:mr-4"
              />
              <label htmlFor="bkash">Pay with MFS </label>
              <img src={bkashlogo} alt="" className="w-6" />
              <img src={rocketlogo} alt="" className="w-6" />
              <img src={nagad} alt="" className="w-6" />
            </div>

            <div className="flex">
              <input
                type="radio"
                name="radio-1"
                id="nagad"
                className="radio radio-xs md:radio-sm mr-2 md:mr-4"
              />
              <label htmlFor="nagad">Pay with Cards</label>
              <img src={mastercard} alt="" className="w-6" />
              <img src={visa} alt="" className="w-6" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end items-center  my-14">

            <button type="button" className="text-white bg-root-100 hover:bg-root-200 w-30 md:w-64 t font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center pr-2 ">
              <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCartsDiv;
