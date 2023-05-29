import React, { useEffect, useState } from 'react';
import OrderInfo from './OrderInfo';
import CartItemDiv from '../ReviewCart/CartItemDiv';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { TbCurrencyTaka } from 'react-icons/tb';

const Orderhistory = () => {
    // Order details from json data
  const [orderInfo, setOrderInfo] = useState([]);
  useEffect(() => {
    fetch("orderDetails.json")
      .then((res) => res.json())
      .then((data) => setOrderInfo(data));
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
    return (
        <>
        <div className="w-[300px] md:w-[680px] lg:w-[900px] mx-auto my-8 md:my-20">
        <div>
          {/* Showing Order Infromation from OrderInfo.jsx */}
            <OrderInfo orderInfo={orderInfo}></OrderInfo>
        </div>

        <hr className="my-4 md:my-10" />

        {/* Showing Products Information from CartItemDiv.jsx  */}
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

        <hr className="my-4 md:my-10" />

        <div className="grid grid-cols-2 text-[#666666] font-medium text-[8px] md:text-base">
        <div>
          <p>Total Payment</p>
          <p className='mt-3'>Paid Through</p>
        </div>
        <div>
          <p className='flex justify-end'><TbCurrencyTaka />134.56</p>
          <p className='mt-3 text-right'>{orderInfo.paidThrough}</p>
        </div>
        </div>
        <Link to="/" className='flex gap-3 my-16 text-[#666666] font-medium text-[8px] md:text-base'><IoIosArrowBack></IoIosArrowBack>Go back to<span className='text-blue-700'>Home</span></Link>
        </div>
        </>
    );
};

export default Orderhistory;