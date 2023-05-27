import React, { createContext, useEffect, useState } from 'react';

export const UtilityContext = createContext();
const UtilityProvider = ({children}) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


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
    }
    return (
        <UtilityContext.Provider value={value}>
            {children}
        </UtilityContext.Provider>
    );
};

export default UtilityProvider;