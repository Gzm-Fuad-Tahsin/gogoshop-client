import React from 'react';

const TopNavSearchField = () => {
    return (

        <>
            <form className='w-full  xl:w-[55rem] relative'>



                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.8055 17.296C13.9424 17.296 17.296 13.9424 17.296 9.80549C17.296 5.66862 13.9424 2.31503 9.8055 2.31503C5.66863 2.31503 2.31503 5.66862 2.31503 9.80549C2.31503 13.9424 5.66863 17.296 9.8055 17.296Z" stroke="#A9A9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.0153 15.4043L17.9519 18.3333" stroke="#A9A9A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="search" id="search-navbar" autoComplete='off' name='search' className="input-field block w-full h-10 p-2 pl-10 text-base  rounded-md    bg-white  md:bg-light-100" placeholder="Search..." />

            </form>
        </>
    );
};

export default TopNavSearchField;