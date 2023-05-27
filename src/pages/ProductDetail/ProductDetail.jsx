import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
    const productData = useLoaderData();
    const {name} = productData;
    console.log(productData);


    // useEffect(() => {
    //     fetch('productDetailData.json')
    //     .then((res) => res.json())
    //     .then((data) => setProducts(data));
    // }, []);
    
    return (
        <div className=''>
           {
            name
           }
        </div>
    );
};

export default ProductDetail;