import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderAlert from './OrderAlert';

const OrderStatus = () => {
    const [orderData, setOrderData] = useState({});

    useEffect(() =>{
        fetch('OrderStatus.json')
        .then(res => res.json())
        .then(data => setOrderData(data))
    }, [])
    const orderNo = orderData?.order_no;
    const trackingInfo = orderData?.trackingInfo;
    const orderPlace = orderData?.order_place;
    const estimateDelivery = orderData?.estimate_deliver;
    return (
        <div className='w-full lg:w-[900px] mx-auto px-2 md:px-4'>
            <div className="bg-[#d9d9d9] p-5">
                <h3 className='text-[#666666]'>Order Status</h3>
            </div>
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
                <ul className="steps steps-vertical mx-auto w-full mt-4 lg:steps-horizontal">
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose plan</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
                </ul>

            </div>

            {/* Table code */}
            <div className='mt-10 mb-4'>
                <table className="table content-center">
                    <tbody>
                        <tr className=''>
                            <td className="text-[#111111] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 w-full">Order Number</td>
                            <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">{orderNo}</td>
                        </tr>
                        <tr className=''>
                            <td className="text-[#111111] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 w-full">Order placed On</td>
                            <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">{orderPlace}</td>
                        </tr>
                        <tr className=''>
                            <td className="text-[#111111] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0 w-full">Estimated delivery date</td>
                            <td className="text-[#666666] text-[16px] font-[300] lg:text-[18px] lg:font-[500] border-0">{estimateDelivery}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link className='ml-4 text-[#205072] hover:underline'>Cancel Order</Link>
            <OrderAlert/>
        </div>
    );
};

export default OrderStatus;