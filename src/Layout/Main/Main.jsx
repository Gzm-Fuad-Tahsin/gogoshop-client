import React, { useContext, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import Footer from '../../pages/Shared/Footer/Footer';


const Main = () => {


    const { screenWidth, showSideNavbyTouch, hideSideNavbyTouch } = useContext(UtilityContext);


    const { showSideNav, setShowSideNav } = useContext(UtilityContext);



    return (
        <>
            <TopNavbar />
          
            <div className='flex'>


                {
                    showSideNav && <SideNavbar  />
                }

                <div className="w-full" onTouchStart={hideSideNavbyTouch}>
                    
                    <Outlet ></Outlet>
                    <Footer />
                </div>
            </div>




            {/* <SwipeNavigation showSideNavbySwipe={showSideNavbyTouch} hideSideNavbySwipe={hideSideNavbyTouch} /> */}

        </>
    );
};

export default Main;