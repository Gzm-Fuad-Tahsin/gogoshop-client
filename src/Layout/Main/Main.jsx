import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import Footer from '../../pages/Shared/Footer/Footer';
import SwipeNavigation from '../../assets/SwipeNavigation/SwipeNavigation';

const Main = () => {


    const { screenWidth, showSideNavbyTouch, hideSideNavbyTouch } = useContext(UtilityContext);


    const { showSideNav, setShowSideNav } = useContext(UtilityContext);


    return (
        <body>



            <TopNavbar>
                <div className=' flex'>

                    <div className='relative'>


                        {
                            showSideNav && <SideNavbar />
                        }
                    </div>
                    <div className="w-full" onTouchStart={hideSideNavbyTouch}>
                        <Outlet ></Outlet>
                        <Footer />
                    </div>

                </div>
            </TopNavbar>

            {/* <SwipeNavigation showSideNavbySwipe={showSideNavbyTouch} hideSideNavbySwipe={hideSideNavbyTouch} /> */}

        </body>
    );
};

export default Main;