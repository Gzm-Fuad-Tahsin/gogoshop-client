import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { TbCurrencyTaka } from 'react-icons/tb';
import '../../../index.css'
const steps = [
    'Processing',
    'Shipping',
    'Delivered',
];
export async function loader() {
    return {};
}

const orderDetailsInfo = {
    from: {
        "shop": "GoGo Shop",
        "address": "Tikatuli, Dhaka, Bangladesh",
        "email": "gogoshop@gmail.com",
        "phone": "+8801906913254",
    },
    to: {
        "user": "Farhan Hasan",
        "address": "Fatullah, Narayanganj",
        "email": "farhan@gmail.com",
        "phone": "+8801906913254",
    },
    details: {
        "orderId": "#512436",
        "date": "30/6/2023",
        "total": "5234",
    },

    voucher: {
        "code": 150
    },

    shipping: {
        "cost": 200,
    }
}

const adminProductDetails = [
    {
        "productName": "Salmon",
        "quantity": 5,
        "size": "",
        "unitCost": 245.45,
        "price": 50

    },
    {
        "productName": "Vim Bar",
        "quantity": 2,
        "size": "500ml",
        "unitCost": 205.45,
        "price": 70

    },
    {
        "productName": "Trix Licuid",
        "quantity": 4,
        "size": "1000ml",
        "unitCost": 245.45,
        "price": 90

    },
    {
        "productName": "Beet Root",
        "quantity": 7,
        "size": "",
        "unitCost": 233.459,
        "price": 30

    },
]


const { from, to, details, voucher, shipping } = orderDetailsInfo

const Admin_OrderDetailView = () => {
    const [stepper, setStepper] = useState(1)
    // const [subTotal, setSubTotal] = useState(0)
    const handleStepper = () => {
        const nextStep = stepper + 1;
        setStepper(nextStep)
    }

    // No1 iteration first value is 0 and next is 245.45
    // No2 iteration firs value is 245.45 and next is 205.45
    const subTotal = adminProductDetails.reduce((first, next) => {
        return first + next.unitCost;
    }, 0);

    const total = subTotal - voucher?.code + shipping?.cost;

    return (
        <div className='w-full max-w-[1350px] p-7 mx-auto'>
            <div>

                {/* Stepper Code */}

                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={stepper} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>

            {/* Stepper button */}

            <div className='text-center m-10'>
                <button className='btn bg-root-200 text-white rounded-xl' onClick={handleStepper}>Next Step</button>
            </div>

            {/* Information code inside gray area */}
            <div className='md:flex md:justify-between text-center md:text-start bg-gray-100 rounded-lg p-8'>
                <div className='mb-5 md:mb-0'>
                    <p className='font-semibold mb-4'>From</p>
                    <p>{from?.shop}</p>
                    <p>{from?.address}</p>
                    <p>{from?.email}</p>
                    <p>{from?.phone}</p>
                </div>

                <div className='mb-5 md:mb-0'>
                    <p className='font-semibold mb-4'>To</p>
                    <p>{to?.user}</p>
                    <p>{to?.address}</p>
                    <p>{to?.email}</p>
                    <p>{to?.phone}</p>
                </div>

                <div>
                    <p className='font-semibold mb-4'>Details</p>
                    <p>OrderId: {details?.orderId}</p>
                    <p>Date: {details?.date}</p>
                    <div className='flex items-center justify-center'>
                        <span>Total Amount: </span>
                        <span><TbCurrencyTaka /></span>
                        <span>{details?.total}</span>
                    </div>
                </div>

            </div>

            <div className='mt-10'>
                <p>Products</p>

            {/* Responsive table code */}
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="text-center">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    #
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Product Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Size
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Unit Cost
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {adminProductDetails.map((product, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="md:px-10 px-6 py-4 whitespace-nowrap">{product?.productName}</td>
                                    <td className="px-12 py-4 whitespace-nowrap">{product?.quantity}</td>
                                    <td className="md:px-3 px-5 py-4 whitespace-nowrap">{product?.size}</td>
                                    <td className="md:px-8 px-6 py-4 whitespace-nowrap">{product?.unitCost}</td>
                                    <td className="md:px-8 px-9 py-4 whitespace-nowrap">{(product?.quantity * product?.unitCost).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                </div>

                
                <div className='mt-8 relative'>
                    <div className='absolute md:right-64 right-20'>
                        <div className='mb-3 flex items-center'>
                            <span>Sub total</span>
                            <span className='ml-4'><TbCurrencyTaka /></span>
                            <span> {subTotal.toFixed(2)}</span>
                        </div>
                        <div className='mb-3 flex items-center'>
                            <span>Voucher</span>
                            <span className='ml-6'><TbCurrencyTaka /></span>
                            <span>- {voucher.code}</span>
                        </div>
                        <div className='mb-3 flex items-center'>
                            <span>Shipping</span>
                            <span className='ml-6'><TbCurrencyTaka /></span>
                            <span>{shipping?.cost}</span>
                        </div>
                        <hr />
                        <div className='flex items-center mt-3'>
                            <span>Total</span>
                            <span className='ml-11'><TbCurrencyTaka /></span>
                            <span>{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-48 md:mr-12 justify-center  md:justify-end'>
                    <button className='bg-gray-500 mr-5 pt-2 pb-2 pr-4 pl-4 rounded-xl flex items-center text-white btn'>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 21C4.70791 21 0 16.2921 0 10.5C0 4.70791 4.70791 0 10.5 0C16.2921 0 21 4.70791 21 10.5C21 16.2921 16.2921 21 10.5 21ZM10.5 1.46512C5.5186 1.46512 1.46512 5.5186 1.46512 10.5C1.46512 15.4814 5.5186 19.5349 10.5 19.5349C15.4814 19.5349 19.5349 15.4814 19.5349 10.5C19.5349 5.5186 15.4814 1.46512 10.5 1.46512Z" fill="white" />
                            <path d="M7.73499 13.9969C7.54941 13.9969 7.36384 13.9285 7.21732 13.782C6.93407 13.4988 6.93407 13.0299 7.21732 12.7467L12.7457 7.2183C13.029 6.93505 13.4978 6.93505 13.7811 7.2183C14.0643 7.50156 14.0643 7.97039 13.7811 8.25365L8.25266 13.782C8.11592 13.9285 7.92057 13.9969 7.73499 13.9969Z" fill="white" />
                            <path d="M13.2634 13.9969C13.0778 13.9969 12.8922 13.9285 12.7457 13.782L7.21732 8.25365C6.93407 7.97039 6.93407 7.50156 7.21732 7.2183C7.50057 6.93505 7.96941 6.93505 8.25266 7.2183L13.7811 12.7467C14.0643 13.0299 14.0643 13.4988 13.7811 13.782C13.6346 13.9285 13.449 13.9969 13.2634 13.9969Z" fill="white" />
                        </svg>
                        <span className='ml-2'>Cancel</span>
                    </button>

                    <button className='mr-5 bg-root-200 pt-2 pb-2 pr-4 pl-4 rounded-xl flex items-center text-white btn'>
                        <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4302 21H7.56977C2.26605 21 0 18.734 0 13.4302V7.56977C0 2.26605 2.26605 0 7.56977 0H13.4302C18.734 0 21 2.26605 21 7.56977V13.4302C21 18.734 18.734 21 13.4302 21ZM7.56977 1.46512C3.06698 1.46512 1.46512 3.06698 1.46512 7.56977V13.4302C1.46512 17.933 3.06698 19.5349 7.56977 19.5349H13.4302C17.933 19.5349 19.5349 17.933 19.5349 13.4302V7.56977C19.5349 3.06698 17.933 1.46512 13.4302 1.46512H7.56977Z" fill="white" />
                            <path d="M7.25728 13.7524C6.84705 13.7524 6.46611 13.6548 6.13402 13.4692C5.32332 13.0101 4.88379 12.1017 4.88379 10.9101V1.16225C4.88379 0.761781 5.21588 0.429688 5.61635 0.429688C6.01681 0.429688 6.34891 0.761781 6.34891 1.16225V10.9101C6.34891 11.545 6.53449 12.0138 6.85681 12.1896C7.19867 12.385 7.72611 12.2873 8.30239 11.9455L9.5917 11.1738C10.1191 10.8613 10.8712 10.8613 11.3987 11.1738L12.688 11.9455C13.274 12.2971 13.8015 12.385 14.1336 12.1896C14.4559 12.0041 14.6415 11.5352 14.6415 10.9101V1.16225C14.6415 0.761781 14.9736 0.429688 15.374 0.429688C15.7745 0.429688 16.1066 0.761781 16.1066 1.16225V10.9101C16.1066 12.1017 15.667 13.0101 14.8563 13.4692C14.0456 13.9283 12.981 13.8306 11.9359 13.2055L10.6466 12.4338C10.588 12.3948 10.4024 12.3948 10.3438 12.4338L9.05449 13.2055C8.44891 13.5669 7.82379 13.7524 7.25728 13.7524Z" fill="white" />
                            <path d="M13.4302 21H7.56977C2.26605 21 0 18.734 0 13.4302V7.56977C0 2.26605 2.26605 0 7.56977 0H13.4302C18.734 0 21 2.26605 21 7.56977V13.4302C21 18.734 18.734 21 13.4302 21ZM7.56977 1.46512C3.06698 1.46512 1.46512 3.06698 1.46512 7.56977V13.4302C1.46512 17.933 3.06698 19.5349 7.56977 19.5349H13.4302C17.933 19.5349 19.5349 17.933 19.5349 13.4302V7.56977C19.5349 3.06698 17.933 1.46512 13.4302 1.46512H7.56977Z" fill="white" />
                            <path d="M7.25728 13.7524C6.84705 13.7524 6.46611 13.6548 6.13402 13.4692C5.32332 13.0101 4.88379 12.1017 4.88379 10.9101V1.16225C4.88379 0.761781 5.21588 0.429688 5.61635 0.429688C6.01681 0.429688 6.34891 0.761781 6.34891 1.16225V10.9101C6.34891 11.545 6.53449 12.0138 6.85681 12.1896C7.19867 12.385 7.72611 12.2873 8.30239 11.9455L9.5917 11.1738C10.1191 10.8613 10.8712 10.8613 11.3987 11.1738L12.688 11.9455C13.274 12.2971 13.8015 12.385 14.1336 12.1896C14.4559 12.0041 14.6415 11.5352 14.6415 10.9101V1.16225C14.6415 0.761781 14.9736 0.429688 15.374 0.429688C15.7745 0.429688 16.1066 0.761781 16.1066 1.16225V10.9101C16.1066 12.1017 15.667 13.0101 14.8563 13.4692C14.0456 13.9283 12.981 13.8306 11.9359 13.2055L10.6466 12.4338C10.588 12.3948 10.4024 12.3948 10.3438 12.4338L9.05449 13.2055C8.44891 13.5669 7.82379 13.7524 7.25728 13.7524Z" fill="white" />
                        </svg>

                        <span className='ml-2'>Save</span>
                    </button>

                    <button className='bg-root-200 pt-2 pb-2 pr-4 pl-4 rounded-xl flex items-center text-white btn'>
                        <svg width="21" height="21" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 5H17V3.4C17 1.8 16.1316 1 13.5263 1H9.47368C6.86842 1 6 1.8 6 3.4V5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 15V18.4286C16 20.1429 14.875 21 12.625 21H10.375C8.125 21 7 20.1429 7 18.4286V15H16Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 8.90621V15.0975C22 17.5741 20.8333 18.8123 18.5 18.8123H16.1667V15.0975H6.83333V18.8123H4.5C2.16667 18.8123 1 17.5741 1 15.0975V8.90621C1 6.42967 2.16667 5.19141 4.5 5.19141H18.5C20.8333 5.19141 22 6.42967 22 8.90621Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.3327 15.0972H15.921H5.66602" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.66602 10.1445H9.16602" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span className='ml-2'>Print</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin_OrderDetailView;