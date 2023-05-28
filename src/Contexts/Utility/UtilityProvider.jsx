import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const UtilityContext = createContext();
const UtilityProvider = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('cartsdata.json')
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])
    

    const updateCart = (item_id,item_unique_name,qunatity) =>{
        console.log(item_id,item_unique_name,qunatity)
        toast.success(`${qunatity} ${item_unique_name} added ---${item_id} `)

    }


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
        updateCart
    }
    return (
        <UtilityContext.Provider value={value}>
            {children}
        </UtilityContext.Provider>
    );
};

export default UtilityProvider;