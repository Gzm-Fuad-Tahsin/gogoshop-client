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
    const updateCartData = (changedItem) => {
        fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(changedItem),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                setChangedProduct(false);
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    // Update previousData whenever cartItems changes in product detail page and card of product
    useEffect(() => {

        if (changeedProduct) {

            updateCartData(changeedProduct);
        }
    }, [changeedProduct]);


    //    quantity update in product detail page and card of product
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

        setCart(newCart);


        toast.success(`Added to Cart`)

    }




    //   update cart for chanign quanitty in viewcart items page 

    const ItemQunatityChangeInCart = ({ product_id, Updatedquantity }) => {

        // console.log(product_id, Updatedquantity)

        const exists = cart.find(product => product.product_id === product_id);
        if (exists) {
            const rest = cart.filter(product => product.product_id !== product_id);
            exists.quantity = Updatedquantity;
            setCart([...rest, exists]);
        }

    }

    // function to delete an item of cart 
    const deleteCartItem = responseData => {
        console.log(responseData);

        let cartTemp = [];
        
        responseData.map(item =>{
            let obj = {"product_id":item.product_id,
            "quantity":item.quantity};
            cartTemp.push(obj);
        })
        console.log(cartTemp);
        // setCart(responseData)

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
        ItemQunatityChangeInCart,
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