import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const UtilityContext = createContext();
const UtilityProvider = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [cart, setCart] = useState([]);
    const [cart1, setCart1] = useState([]);


    //_________________navbar____________________________
    const [showSideNav, setShowSideNav] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setIsExpanded(false)
        setShowSideNav(true);
        if (screenWidth < 768) {
            setShowSideNav(false);

        }
    }, [screenWidth])


// ___________________________cart_____________________________

    useEffect(() => {
        fetch('cartsdata.json')
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])



    const updateCart = item => {
        const {id, u_name, quantity} = item
        toast.success(`${quantity} ${u_name} added ---${id} `)

    }
    

    // _____________________________________footer__________________________
    const [footerData, setfooterData] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/footer`)
            .then(res => res.json())
            .then(data => setfooterData(data))
    }, [])



    // ____________________________________touch__________________
    const showSideNavbyTouch = () => {
        if(screenWidth<768){
            setShowSideNav(true);

        }
      };
    
      const hideSideNavbyTouch = () => {
        if(screenWidth<768){

            setShowSideNav(false);
        }
      };




    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            
        };
    }, []);



    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setScreenHeight(window.innerHeight);
      };
  
      // Set initial screen height
      setScreenHeight(window.innerHeight);
  
      // Update screen height on window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);




    // _____________________________ SCROLL TO TOP ____________________________________________
    const ScrollToTop = () =>{
         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  


    const value = {
        ScrollToTop,
        screenHeight,
        screenWidth,
        cart,
        setCart,
        updateCart,
        footerData,
        showSideNav,
        setShowSideNav,
        showSideNavbyTouch,
        hideSideNavbyTouch,
        isExpanded,
        setIsExpanded,

    }
    return (
        <UtilityContext.Provider value={value}>
            {children}
        </UtilityContext.Provider>
    );
};

export default UtilityProvider;