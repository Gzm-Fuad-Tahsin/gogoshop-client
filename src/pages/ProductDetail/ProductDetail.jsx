import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';

const ProductDetail = () => {

    const { cart } = useContext(UtilityContext);


    const [productData, setproductData] = useState('');

    const [cartItem, setCartItem] = useState({
        "id": null,
        "u_name": null,
        "quantity": 1
    })


    useEffect(() => {
        fetch('productDetailData.json')
            .then(res => res.json())
            .then(data => setproductData(data))
    }, [])



    useEffect(() => {
        if ((cart.length > 0) && productData) {
            setCartItem(cart.find(item => item.id === productData?.id))
        }
    }, [productData, cart])



    return (
        <div className='flex justify-center p-2  pt-4 md:pt-14 '>


            {
                productData && <ProductDescription productData={productData} cartItem={cartItem} />
            }

        </div>
    );
};

export default ProductDetail;