import React, { useContext, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../../pages/Shared/TopNavBar/TopNavbar';
import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import Footer from '../../pages/Shared/Footer/Footer';
import ScrollToTopButton from '../../pages/Shared/ScrollToTop/ScrollToTop';


const Mobile = ({children}) => {


    const { screenWidth, showSideNavbyTouch, hideSideNavbyTouch } = useContext(UtilityContext);


    const { showSideNav, setShowSideNav } = useContext(UtilityContext);

    const [goToTop,setGoToTop] = useState(true);

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
             
              }else{
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
            <TopNavbar />

            <div className='flex'>


                {
                    showSideNav && <SideNavbar  />
                }

                <div  onTouchStart={hideSideNavbyTouch}>

                    {
                        children
                    }
                    <Footer />

                    {
                        goToTop &&<ScrollToTopButton/>
                    }
                    
                </div>
            </div>




            {/* <SwipeNavigation showSideNavbySwipe={showSideNavbyTouch} hideSideNavbySwipe={hideSideNavbyTouch} /> */}

        </>
    );
};

export default Mobile;