import React, { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import logoFull from '../../../../assets/icons/logo-full.png';
import { Link } from 'react-router-dom';
import Admin_SideNav_Mobile from '../../Admin_SideNav/Admin_SideNav_Mobile/Admin_SideNav_Mobile';

const Admin_TopNav_Mobile = () => {

    // SIDENAV mui 
    const [sideNavstate, setsideNavstate] = useState(false);



    const toggleDrawer = (open) => (event) => {

        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setsideNavstate(open);
    };
    return (
        <>

            <div className="navbar  bg-light-100 md:bg-white px-1  relative border-b-[1px] h-[64px]">


                {/* toggle button  */}
                <div className="navbar-start  pl-2 w-fit h-full">
                    <>
                        <button className='text-slate-100 hover:text-slate-200 w-full h-full hover:cursor-pointer' onClick={toggleDrawer(true)}>

                            <svg width="24" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.75" y1="-0.75" x2="25.25" y2="-0.75" transform="matrix(1 0 0 -1 0 18)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="0.75" y1="-0.75" x2="18.1591" y2="-0.75" transform="matrix(1 0 0 -1 0 9)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="0.75" y1="-0.75" x2="12.25" y2="-0.75" transform="matrix(1 0 0 -1 0 0)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>

                        </button>
                        <SwipeableDrawer
                            anchor={'left'}
                            open={sideNavstate}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"

                            >

                                <Admin_SideNav_Mobile setsideNavstate={setsideNavstate} />
                            </Box>
                        </SwipeableDrawer>

                    </>
                </div>



                {/* logo  */}
                <div className="grow flex justify-center ">
                    <Link to='/' className="indicator flex items-center  w-28 pl-3">
                        <img src={logoFull} alt='gogoshop logo' className='w-full' />
                    </Link>
                </div>
            


            {/* top nav admin icon */}
            <div className="navbar-end w-fit flex justify-center items-center pr-2 sm:pr-5 ">
                <button className='flex justify-center items-center' onClick={() => alert('df')}><FiLogOut className='mr-1' />Logout</button>
            </div>
        </div >




    </>
    );
};

export default Admin_TopNav_Mobile;