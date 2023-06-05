import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../assets/icons/logo-full.png';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';


import { TfiFacebook } from 'react-icons/tfi';
import { ImWhatsapp } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import bkashLogo from '../../../assets/icons/BKash-Logo 1.svg';
import nagadLogo from '../../../assets/icons/Nagad-Logo 1.svg'
import mastercardlogo from '../../../assets/icons/Mastercard-Logo.wine.svg'
import visalogo from '../../../assets/icons/Visa_Inc.-Logo.wine.svg'
import { WebpageDataContext } from '../../../Layout/Main/Main';


const Footer = () => {
    const { footerData } = useContext(WebpageDataContext);

    

    return (

        <footer className=" bg-[#ECFAEE] m-3  rounded-xl  mt-10">

            {footerData &&
                <div className=" w-full p-4 py-6 lg:py-8  mx-auto">
                    <div className="md:flex md:flex-row mx-auto">

                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="my-6 flex flex-col items-center md:items-start">
                                <a href="" className="">
                                    <img src={logo} className="w-[12rem]" alt="gogoshop Logo" />
                                </a>

                                <div className='text-[#666666] mt-4  text-center md:text-left'>
                                    <h3 className='font-medium text-xl'>{footerData?.companyInfo.title}</h3>
                                    <p className='font-normal'><small>{footerData?.companyInfo.info}</small></p>
                                    <div className="mt-4 grid grid-cols-4 gap-3 items-center">
                                        <div className="cursor-pointer">
                                            <img src={bkashLogo} alt="" />
                                        </div>
                                        <div className="cursor-pointer">
                                            <img src={nagadLogo} alt="" />
                                        </div>
                                        <div className="cursor-pointer">
                                            <img src={mastercardlogo} alt="" />
                                        </div>
                                        <div className="cursor-pointer">
                                            <img src={visalogo} alt="" />
                                        </div>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className='mt-7 flex flex-col items-center md:items-start'>
                                <h2 className=" w-11/12 md:w-8/12  mb-6 pb-2 border-b-2 border-[#7BE495] text-[#666666] text-center md:text-left ">Customer Support</h2>
                                <ul className="text-[#666666] font-medium">
                                    <li className="mb-6 flex items-center">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.0317 10.9724C14.0208 14.9604 14.9258 10.3467 17.4656 12.8848C19.9143 15.3328 21.3216 15.8232 18.2192 18.9247C17.8306 19.237 15.3616 22.9943 6.6846 14.3197C-1.99348 5.644 1.76158 3.17244 2.07397 2.78395C5.18387 -0.326154 5.66586 1.08938 8.11449 3.53733C10.6544 6.0765 6.04266 6.98441 10.0317 10.9724Z" stroke="#205072" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className='ml-2 hover:underline cursor-pointer'>{footerData.phone.number1}</span>
                                    </li>
                                    <li className=' flex justify-evenly cursor-pointer text-2xl '>

                                        <Link to={footerData?.social?.whatsapp}><ImWhatsapp /></Link>
                                        <Link to={footerData?.social?.facebook}> <TfiFacebook /></Link>
                                        <Link to={footerData?.social?.instagram}><BsInstagram /></Link>




                                    </li>
                                </ul>
                            </div>


                            <div className='mt-7 col-span-1 md:col-span-2  grid grid-cols-2 gap-x-5'>

                                <div>
                                    <h2 className="w-11/12 md:w-9/12  mb-6 pb-2 border-b-2 border-[#7BE495] text-[#666666] ">Customer Services</h2>
                                    <ul className="text-[#666666] font-medium">

                                        {
                                            footerData.customerService.map(serviceLink => <Link key={serviceLink.id}><li className='hover:underline text-[#666666] mb-2'>{serviceLink.name}</li></Link>)
                                        }

                                    </ul>
                                </div>

                                <div>
                                    <h2 className="  w-11/12 md:w-9/12  mb-6 pb-2 border-b-2 border-[#7BE495] text-[#666666] ">Popular Categories</h2>
                                    <ul className="text-[#666666] font-medium">

                                        {
                                            footerData.popularCategories.map(popularLink => <Link key={popularLink.id}><li className='hover:underline text-[#666666] mb-2'>{popularLink.name}</li></Link>)
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <p className='text-center mt-6'> &copy; {new Date().getFullYear()}. All right reserved gogoshop Ltd</p>
                </div>

            }
        </footer>

    );
};

export default Footer;