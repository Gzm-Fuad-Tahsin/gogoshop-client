import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LoadingIcon from '../../pages/ErrorPages/LoadingIcon/LoadingIcon';


export const cartDataContext = createContext();

const CartDataProvider = ({ children }) => {

    const { user } = useContext(AuthContext);

    // ___________________________cart___________________________
    const [loadingpage, setLoadingPage] = useState(false);
    const [cart, setCart] = useState([]);
    const [changeedProduct, setChangedProduct] = useState(null);



    // when the user will change it will call the cart
    useEffect(() => {
        console.log('user changed, cart new load ')
        setLoadingPage(true);
        fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`)
            .then(res => res.json())
            .then(data => {

                setCart(data)
                setLoadingPage(false)
            })
    }, [user])



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
    const updateCart = ({ _id, quantity }) => {
        /* STEP : 
          update cart --> update the cart in code, and setchanged Prdouct
          changedProduct is under an use effect, so, it will call updatecartdataIndb() 
          */
        console.log(_id, quantity)

        let newCart = [];
        const exists = cart.find(product => product._id === _id);
        if (!exists) {
            setChangedProduct({ _id, quantity });
            newCart = [...cart, { _id, quantity }];
        }
        else {
            const rest = cart.filter(product => product._id !== _id);
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




    // value of context _______________
    const value = {
        cart,
        setCart,
        updateCart,
        deleteCartItem,
        loadingpage,
        setLoadingPage

    }

    return (
        <cartDataContext.Provider value={value}>
            {
                loadingpage ?
                    <>
                        <LoadingIcon />
                    </>
                    :
                    <>
                        {children}
                    </>
            }

        </cartDataContext.Provider>
    );
};

export default CartDataProvider;