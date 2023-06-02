import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const UtilityContext = createContext();
const UtilityProvider = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [cart, setCart] = useState([]);
   


    //_________________navbar____________________________
    const [showSideNav, setShowSideNav] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);  //search bar in small screen

    useEffect(() => {
        setIsExpanded(false)
        setShowSideNav(true);
        if (screenWidth < 768) {
            setShowSideNav(false);

        }
    }, [screenWidth])


// ___________________________cart_____________________________

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`)
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])



    const updateCart = item => {
        const {id, u_name, quantity} = item
        toast.success(`${quantity} ${u_name} added ---${id} `)

    }
    



    
  


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



    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);

          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);







    const value = {
        screenWidth,
        cart,
        setCart,
        updateCart,
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