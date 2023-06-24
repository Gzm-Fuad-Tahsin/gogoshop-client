import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const UtilityContext = createContext();
const UtilityProvider = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    //_________________navbar____________________________

    const [showSideNav, setShowSideNav] = useState(true);


    useEffect(() => {
        // console.log(screenWidth)
        setShowSideNav(true);
        
        
        if (screenWidth < 768) {
            setShowSideNav(false);

        }
        
    }, [screenWidth])


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
        showSideNav,
        setShowSideNav,
    }
    return (
        <UtilityContext.Provider value={value}>
            {children}
        </UtilityContext.Provider>
    );
};

export default UtilityProvider;