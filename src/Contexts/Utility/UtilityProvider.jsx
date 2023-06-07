import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const UtilityContext = createContext();
const UtilityProvider = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);




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
    const [cart, setCart] = useState([]);
    const [changeedProduct, setChangedProduct] = useState(null);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`)
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])



    // Function to update cart data in the database
    const updateCartDataInDB = (changedItem) => {
        fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(changedItem),
        })
            .then((response) => response.json())
            .then((responseData) => {
                setCart(responseData);
                setChangedProduct(false);
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    // Update previousData whenever cartItems changes in product detail page and card of product
    useEffect(() => {

        if (changeedProduct) {

            updateCartDataInDB(changeedProduct);
        }
    }, [changeedProduct]);


    //    quantity update in product detail page and card of product

    /*

    update cart --> update the cart in code, and setchanged Prdouct
    changedProduct is under an use effect, so, it will call updatecartdataIndb() 
    */
    const updateCart = ({ product_id, quantity }) => {

        console.log(product_id, quantity)

        let newCart = [];
        const exists = cart.find(product => product.product_id === product_id);
        if (!exists) {
            setChangedProduct({ product_id, quantity });
            newCart = [...cart, { product_id, quantity }];
        }
        else {
            const rest = cart.filter(product => product.product_id !== product_id);
            exists.quantity = parseInt(exists.quantity) + quantity;
            newCart = [...rest, exists];
            setChangedProduct(exists);
        }

      


        toast.success(`Added to Cart`)

    }





    // function to delete an item of cart 
    const deleteCartItem = responseData => {
        setCart(responseData)

    }









    // ____________________________________touch__________________

    const showSideNavbyTouch = () => {
        if (screenWidth < 768) {
            setShowSideNav(true);

        }
    };

    const hideSideNavbyTouch = () => {
        if (screenWidth < 768) {

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
        deleteCartItem,
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