import React, { useContext, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import Footer from '../../pages/Shared/Footer/Footer';
import ScrollToTopButton from '../../pages/Shared/ScrollToTop/ScrollToTop';
import SwipeNavigation from '../../assets/FunctionalityJSX/SwipeNavigation/SwipeNavigation';


const Main = () => {


    const { screenWidth, showSideNav, showSideNavbyTouch,  hideSideNavbyTouch } = useContext(UtilityContext);


 

    const [goToTop, setGoToTop] = useState(true);

    // scroll to top 
    useEffect(() => {
        let isThrottled = false;

        const handleScroll = () => {
            if (!isThrottled) {
                isThrottled = true;

                setTimeout(() => {
                    const isScrollPositionGreaterThanScreenHeight = window.scrollY > window.innerHeight;

                    if (isScrollPositionGreaterThanScreenHeight && goToTop) {

                        setGoToTop(true)
                        console.log("User's scrolling position is greater than the screen height");

                    } else {
                        setGoToTop(false)

                    }

                    isThrottled = false;
                }, 200); // Throttle the event to execute every 200 milliseconds
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            {
                screenWidth < 768 ?
                    <>
                      <div className='border-b-[1px] max-w-full  sticky top-0 z-[1000] '>
                            <TopNavbar />
                        </div>
                        <div className='flex'>
                            {
                                showSideNav &&
                                <div className=' min-w-[240px] w-60 h-screen  overflow-y-scroll fixed  top-[62px] z-40   pt-4  bg-white flex flex-col ' >

                                    <SideNavbar />
                                    
                                </div>
                            }
                            <div className="w-full" onTouchStart={hideSideNavbyTouch}>

                                <Outlet ></Outlet>
                                <Footer />

                                {
                                    goToTop && <ScrollToTopButton />
                                }

                            </div>
                        </div>
                       

                               
                               

                         
                      
                        <SwipeNavigation showSideNavbySwipe={showSideNavbyTouch} hideSideNavbySwipe={hideSideNavbyTouch} />

                    </>
                    :
                    <>
                        <div className='border-b-[1px] max-w-full  sticky top-0 z-[1000] '>
                            <TopNavbar />
                        </div>
                        <div className='flex'>
                            {
                                showSideNav &&
                                <div className=' min-w-[240px] w-60 h-screen  overflow-y-scroll sticky  top-[60px] z-40  pt-4  bg-white flex flex-col ' >

                                    <SideNavbar />
                                    
                                </div>
                            }
                            <div className="w-full" onTouchStart={hideSideNavbyTouch}>

                                <Outlet ></Outlet>
                                <Footer />

                                {
                                    goToTop && <ScrollToTopButton />
                                }

                            </div>
                        </div>


                    </>
            }




           
        </>
    );
};

export default Main;