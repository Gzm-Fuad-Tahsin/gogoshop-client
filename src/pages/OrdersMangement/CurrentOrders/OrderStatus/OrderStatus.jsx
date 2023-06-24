import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OrderAlert from './OrderAlert';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollTotop';
import { fetchJson } from '../../../../assets/Scripts/utility';
import { IoIosArrowBack } from "react-icons/io";
import PageTitle from '../../../../components/PageTitle/PageTitle';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const steps = [
    'Processing',
    'Shipping',
    'Delivered',
];

export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/orderstatus/${params.orderId}`);

}

const OrderStatus = () => {

    const steps = ["Processing", "Shipping", "Delivered"]

    const orderData = useLoaderData();


    const { order_no, trackingInfo, order_place, estimate_delivery } = orderData;

    return (

        <>
            <ScrollToTop />
            <PageTitle text={'Order Status'}/>

            <div className='w-full lg:w-[900px] mx-auto px-2 md:px-4'>
                
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
                    
                    {/* Stepper code */}
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>

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
                </div>
            </div>
        </>
    );
};

export default OrderStatus;