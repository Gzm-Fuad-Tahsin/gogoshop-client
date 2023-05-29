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



    const updateCart = (item_id, item_unique_name, qunatity) => {
        console.log(item_id, item_unique_name, qunatity)
        toast.success(`${qunatity} ${item_unique_name} added ---${item_id} `)

    }

    // _____________________________________footer__________________________
    const [footerData, setfooterData] = useState(null);

    useEffect(() => {
        fetch('footer.json')
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


    const value = {
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