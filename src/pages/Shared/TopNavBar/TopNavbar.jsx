import React from 'react';
import logo from '../../../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import './InputStyle.module.css';
const TopNavbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start p-0 h-14 w-2/5">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle ml-8">
                            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.75" y1="-0.75" x2="25.25" y2="-0.75" transform="matrix(1 0 0 -1 0 18)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="0.75" y1="-0.75" x2="18.1591" y2="-0.75" transform="matrix(1 0 0 -1 0 9)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="0.75" y1="-0.75" x2="12.25" y2="-0.75" transform="matrix(1 0 0 -1 0 0)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </label>
                    </div>
                    <div className='w-40 ml-10 logo' >
                        <img src={logo} alt="" className='w-48'/>
                   </div>
                </div>
                <form className="navbar-center form-control w-[478px] relative">
                    <div className="absolute left-full -top-3 md:left-5 md:top-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.8055 17.296C13.9424 17.296 17.296 13.9424 17.296 9.80549C17.296 5.66862 13.9424 2.31503 9.8055 2.31503C5.66863 2.31503 2.31503 5.66862 2.31503 9.80549C2.31503 13.9424 5.66863 17.296 9.8055 17.296Z" stroke="#A9A9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#A9A9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <input type="text" autoFocus="autofocus" placeholder="Search essentials, groceries and more..." className="input input-bordered w-full bg-[#ECFAEE] hidden md:block" />
                </form>
                <div className="navbar-end justify-start ml-5">
                    <div className='md:flex md:w-[9.7rem] sm:w-[1.97rem] hidden'>
                        <div className='mr-2'>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 12.75C15.1862 12.75 17.4166 10.6519 17.4166 8C17.4166 5.34809 15.1862 3.25 12.5 3.25C9.81373 3.25 7.58331 5.34809 7.58331 8C7.58331 10.6519 9.81373 12.75 12.5 12.75Z" stroke="#434343" strokeWidth="1.5" />
                                <path d="M6.25 21C6.25 21 6.25 19.75 6.25 18.5C6.25 17.25 8.59286 16 12.5 16C16.4072 16 18.75 17.25 18.75 18.5C18.75 20.375 18.75 21 18.75 21" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className=''>
                            <Link>Sign Up / </Link>
                            
                            <Link>Sign In</Link>
                        </div>
                    </div>
                    <Link className='border-l-2 border-[#D9D9D9]  ml-5 flex'>
                        <div className='ml-3 mr-2'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.47154 15.4348C5.83024 15.4348 6.12179 15.7264 6.12179 16.0851C6.12179 16.4438 5.83024 16.7345 5.47154 16.7345C5.11284 16.7345 4.82214 16.4438 4.82214 16.0851C4.82214 15.7264 5.11284 15.4348 5.47154 15.4348Z" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0361 15.4348C15.3948 15.4348 15.6863 15.7264 15.6863 16.0851C15.6863 16.4438 15.3948 16.7345 15.0361 16.7345C14.6774 16.7345 14.3858 16.4438 14.3858 16.0851C14.3858 15.7264 14.6774 15.4348 15.0361 15.4348Z" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.5 1.34998L3.268 1.65598L4.08655 11.408C4.15285 12.2028 4.8167 12.8131 5.614 12.8131H14.8892C15.6508 12.8131 16.2968 12.2538 16.4064 11.499L17.2131 5.92468C17.3126 5.23703 16.7796 4.62163 16.0851 4.62163H3.5519" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.1692 7.76318H13.5262" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className='hidden md:block'>Cart</span>
                    </Link>
                    <Link className='border-l-2 border-[#D9D9D9] ml-5 md:flex hidden mr-2'>
                        <div className='ml-3 mr-2'>
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4375 2.0071L11.9578 2.58264L12.5203 2.00806C14.0906 0.442102 16.2656 -0.270612 18.4031 0.0934188C21.6328 0.644021 24 3.50351 24 6.85604V7.13422C24 9.12464 23.1937 11.0287 21.7687 12.386L13.2984 20.4772C12.9469 20.8129 12.4828 21 12 21C11.5172 21 11.0531 20.8129 10.7016 20.4772L2.23078 12.386C0.807656 11.0287 0 9.12464 0 7.13422V6.85604C0 3.50351 2.36812 0.644021 5.59687 0.0934188C7.69219 -0.270612 9.90937 0.442102 11.4375 2.0071ZM11.9578 5.83925L9.84844 3.59464C8.83125 2.59607 7.3875 2.12221 5.96719 2.36393C3.82266 2.72988 2.25 4.63061 2.25 6.85604V7.13422C2.25 8.48675 2.79891 9.78172 3.76594 10.7026L12 18.5683L20.2359 10.7026C21.2016 9.78172 21.75 8.48675 21.75 7.13422V6.85604C21.75 4.63061 20.175 2.72988 18.0328 2.36393C16.6125 2.12221 15.1687 2.59607 14.1516 3.59464L11.9578 5.83925Z" fill="#434343" />
                            </svg>
                        </div>
                        <span>Wishlist</span>
                    </Link>
                    {/* <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Order History</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;