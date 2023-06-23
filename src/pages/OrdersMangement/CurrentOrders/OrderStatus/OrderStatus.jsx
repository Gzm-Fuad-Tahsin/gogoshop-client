import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OrderAlert from './OrderAlert';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollTotop';
import { fetchJson } from '../../../../assets/Scripts/utility';
import { IoIosArrowBack } from "react-icons/io";
import PageTitle from '../../../../components/PageTitle/PageTitle';
export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/orderstatus/${params.orderId}`);

}

const OrderStatus = () => {

    const orderData = useLoaderData();


    const { order_no, trackingInfo, order_place, estimate_delivery } = orderData;

    return (

        <>
            <ScrollToTop />
            <PageTitle text={'Order Status'}/>

            <div className='w-full lg:w-[900px] mx-auto px-2 md:px-4'>
              
                {/* Stepper code */}
                <div>

                    {/* <ol className="relative border-l border-gray-300 ml-5 mt-5">                  
                {
                      trackingInfo &&  trackingInfo.map(track => <><li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border "></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-500">{track.time}</time>
                            <h3 className="text-lg font-semibold text-[#666666]">{track.status}</h3>
                        </li></>)
                }
            </ol> */}

                    <ol class="flex items-center w-full">
                        <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                            <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                <svg aria-hidden="true" class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </span>
                        </li>
                        <li class="flex items-center w-full">
                            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </span>
                        </li>
                    </ol>





                    {/* Table code */}
                    <div className='mt-10 px-1 lg:px-3 mb-4 '>


                        <div className='flex items-center'>
                            <div className=" text-[#111111] text-base font-light border-0 w-full">Order Number</div>
                            <div className="whitespace-pre text-[#666666] text-base font-light border-0">{order_no}</div>
                        </div>
                        <div className='flex items-center'>
                            <div className=" text-[#111111] text-base font-light border-0 w-full">Order placed On</div>
                            <div className="whitespace-pre text-[#666666] text-base font-light border-0">{order_place}</div>
                        </div>
                        <div className='flex items-center'>
                            <div className=" text-[#111111] text-base font-light border-0 w-full">Estimated delivery date</div>
                            <div className="whitespace-pre text-[#666666] text-base font-light border-0">{estimate_delivery}</div>
                        </div>


                    </div>
                    <Link className='flex justify-end mt-8 text-[#205072] hover:underline'>Cancel Order</Link>
                    <Link to="/" className='flex items-center gap-1 hover:underline my-16 text-[#666666] font-medium text-base '><IoIosArrowBack></IoIosArrowBack>Go back to<span className='text-blue-700'>Home</span></Link>

                    <OrderAlert />
                </div>
            </div>
        </>
    );
};

export default OrderStatus;