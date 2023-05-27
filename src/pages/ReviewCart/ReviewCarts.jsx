import React, { useEffect, useState } from 'react';
import ReviewCart from './ReviewCart';
import ProductCart from './ProductCart';

const ReviewCarts = () => {
    const [customerInfo, setCustomerInfo] = useState([]);
    

    useEffect(() => {
        fetch("customerInfo.json")
          .then((res) => res.json())
          .then((data) => setCustomerInfo(data));
      }, []);

    
    return (
        <>
        <div className='m-20'>

        
        {
                customerInfo.map((info) => (<ReviewCart
                key={info.id}
                info={info}
                ></ReviewCart>))
            }
        
            </div>
            <div>
                <ProductCart></ProductCart>
            </div>
        </>
    );
};

export default ReviewCarts;