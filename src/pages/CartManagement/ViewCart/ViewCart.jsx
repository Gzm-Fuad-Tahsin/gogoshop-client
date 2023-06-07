import React, { useContext, useEffect, useState } from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import IndividualProductBar from './IndividualProductComponentForCart';
import { fetchJson } from '../../../assets/Scripts/utility';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export async function loader({ params }) {

  return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/cartsWithImage`);
}
const ViewCart = () => {
  const data = useLoaderData();
  const [cartWithImageData, setcartWithImageData] = useState(data);
  const { cart, deleteCartItem } = useContext(UtilityContext);

  // sum taka 
  const [total, setTotal] = useState(0.0);



  // store to db while chnage the page _________________________________
  const storeDataToDatabase = (path) => {
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(path);
        console.log(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  // function to delete an item of cart  
  const handleDeleteCartItem = product_id => {
    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product_id),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setcartWithImageData(responseData);
        deleteCartItem(responseData);
      })
      .catch((error) => {
        console.error(error.code);
      });

  }






  // sum the total ammount _____________________
  useEffect(() => {


    let totalammount = 0;

    // since cart is updated inside the code, i am loop through this 
    for (const cartItem of cart) {

      const cartItemDetailed = cartWithImageData.find(i => i.product_id === cartItem.product_id);
      console.log(cartItemDetailed?.buyingprice, "  ",cartItem?.quantity)
      totalammount += (parseFloat(cartItemDetailed?.buyingprice) * cartItem.quantity)

    }
    setTotal(totalammount)
  }, [cart])





  return (
    <>
      <ScrollToTop />
      <PageTitle text={'Cart'} />

      {/* load all the items added in the cart with quantity increase decrease button _____________________________________ */}
      <div className=' md:w-[780px] lg:w-[830px] mx-auto px-2 md:px-4 '>
        {
          cartWithImageData.map((product, _idx) => <IndividualProductBar
            key={_idx}
            product={product}
            handleDeleteCartItem={handleDeleteCartItem}

          />)
        }


        {/* total ammount */}
        <h2 className='text-right text-lg font-medium text-gray-700 px-4 md:px-14 '>Total<span className='text-[0.5rem] font-light  pr-1'>&#40;w/oSVC&#41;</span> {total.toFixed(2)}</h2>



      </div>
    </>
  );
};

export default ViewCart;