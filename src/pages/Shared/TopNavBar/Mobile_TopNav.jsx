import React, { useState } from 'react';

import TopNavCollapsableMenu from './TopNavCollapsableMenu';



import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import TopNavSearchField from './TopNavSearchField';
import MobileSideNav from '../SideNavbar/SideNavbar/Mobile_SideNav';


const MobileTopNav = () => {

    // SIDENAV mui 
    const [sideNavstate, setsideNavstate] =useState(false);



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
                <div className="navbar-start pl-2 w-fit h-full">
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

                                <MobileSideNav setsideNavstate={setsideNavstate} />
                            </Box>
                        </SwipeableDrawer>

                    </>
                </div>




                {/* search bar  */}
                <div className="navbar-center grow pl-4  pr-2 justify-center">
                    <TopNavSearchField />
                </div>

                {/* cart and wishlist dropdown */}
                <div className="navbar-end w-fit ">
                    <TopNavCollapsableMenu />
                </div>
            </div>




        </>
    );
};

export default MobileTopNav;