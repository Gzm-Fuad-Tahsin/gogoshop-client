import React, { useContext, useEffect, useState } from 'react';
import OrderInfo from './OrderInfo';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { TbCurrencyTaka } from 'react-icons/tb';
import ItemInfoDiv from '../../components/ItemInfoDiv/itemInfoDiv';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import PageTitle from '../../components/PageTitle/PageTitle';
import ScrollToTop from '../../components/ScrollToTop/ScrollTotop';
import { fetchJson } from '../../assets/Scripts/utility';


export async function loader({ params }) {

    return await fetchJson("orderDetails.json");
  
  }
const Orderhistory = () => {
   
    const { screenWidth } = useContext(UtilityContext);
    // Order details from json data
    const [orderInfo, setOrderInfo] = useState([]);
 

    // Products Information which is in cart after add to cart
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("table.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    
    return (
        <>
         <ScrollToTop/>

         <PageTitle text='Order History'/>
      
            <div className="w-full lg:w-[900px] mx-auto px-2 md:px-5 my-2">
                <div>
                    {/* Showing Order Infromation from OrderInfo.jsx */}
                    <OrderInfo orderInfo={orderInfo}></OrderInfo>
                </div>

                <hr className="my-2" />

                {/* Showing Products Information from ItemInfoDiv.jsx  */}
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
                    <div className="px-0 md:px-5">
                        {products.map((product) => (
                            <ItemInfoDiv key={product.id} product={product}></ItemInfoDiv>
                        ))}
                    </div>
                </div>

                <hr className="my-2" />

                <div className=" text-[#666666] font-medium text-base  md:text-base px-0 md:px-5">
                    <div className='grid grid-cols-2'>
                        <p>Total Payment</p>
                        <p className='flex justify-end'><TbCurrencyTaka />134.56</p>

                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='mt-3'>Paid Through</p>
                        <p className='mt-3 text-right'>{orderInfo.paidThrough}</p>
                    </div>
                </div>
                <Link to="/" className='flex items-center gap-1 hover:underline my-16 text-[#666666] font-medium text-[8px] md:text-base'><IoIosArrowBack></IoIosArrowBack>Go back to<span className='text-blue-700'>Home</span></Link>
            </div>
        </>
    );
};

export default Orderhistory;