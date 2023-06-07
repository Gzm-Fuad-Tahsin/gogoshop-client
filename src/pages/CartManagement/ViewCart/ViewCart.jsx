import React, { useContext, useEffect, useState } from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import IndividualProductBar from './IndividualProductComponentForCart';
import Loading from '../../ErrorPages/Loading/Loading';
import { CiShoppingBasket } from 'react-icons/ci';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const ViewCart = () => {

  const { cart, setCart, deleteCartItem, loadingpage, setLoadingPage } = useContext(UtilityContext);
  const navigate = useNavigate();


  useEffect(() => {
    setLoadingPage(false);
  }, [])
  // sum taka 
  const [total, setTotal] = useState(0.0);



  // store to db while chnage the page _________________________________
  const storeDataToDatabase = (path) => {
    let tempcart = [];
    cart.map(item => {
      let obj = {
        "product_id": item.product_id,
        "quantity": item.quantity
      }
      tempcart.push(obj);
    })

    fetch(`${import.meta.env.VITE_SERVER_ADDRESS}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    }).then((response) => response.json())
      .then((responseData) => {
        navigate(path)
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
        deleteCartItem(responseData);
      })
      .catch((error) => {
        console.error(error.code);
      });

  }



  //   update cart for chanign quanitty in viewcart items page 
  const ItemQunatityChangeInCart = ({ product_id, Updatedquantity }) => {

    setCart(prevCart => {
      const updatedCart = prevCart.map(product => {
        if (product.product_id === product_id) {
          return { ...product, quantity: Updatedquantity };
        }
        return product;
      });

      return updatedCart;
    });

  }



  // sum the total ammount _____________________
  useEffect(() => {
    let totalammount = 0;
    // since cart is updated inside the code, i am loop through this 
    for (const cartItem of cart) {
      totalammount += (parseFloat(cartItem?.buyingprice) * cartItem.quantity)
    }
    setTotal(totalammount)
  }, [cart])





  return (
    <>
      <ScrollToTop />
      <div className='w-full px-3 py-2 lg:pl-24 mb-4 bg-gray-200 flex justify-between items-center'>
        <h2 className='font-medium'>Cart</h2>
        <div className="pr-0 sm:pr-6 md:pr-10 lg:pr-20 xl:pr-36">
          <button
            className="px-3 py-1 bg-root-100 hover:bg-root-200 text-base-100 rounded-xl flex items-center"
            onClick={() => storeDataToDatabase('/')}
          >
            <CiShoppingBasket className='text-2xl pr-1' />
            Continue Shopping</button>
        </div>
      </div>

      {
        loadingpage ?
          <Loading />
          :
          <>
            {/* load all the items added in the cart with quantity increase decrease button _____________________________________ */}
            <div className=' lg:w-[830px] mx-auto px-2 md:px-4 '>

              {
                cart.length > 0 ?
                  <>
                    {
                      cart.map((product) => <IndividualProductBar
                        key={product?.product_id}
                        product={product}
                        handleDeleteCartItem={handleDeleteCartItem}
                        ItemQunatityChangeInCart={ItemQunatityChangeInCart}

                      />)
                    }


                    {/* total ammount */}
                    <div className='text-right text-base font-medium text-gray-700 px-4 md:px-14 flex items-center justify-end'>
                      <h2>
                        Total
                        <span className='text-[0.5rem] font-light pr-2'>
                          &#40;w/o SVC&#41;</span>
                        {total.toFixed(2)}
                      </h2>
                      <TbCurrencyTaka />
                    </div>


                    <div className="mt-8 flex justify-center">
                      <button
                        className="px-6 py-1 text-lg bg-root-100 hover:bg-root-200 text-base-100 rounded-xl flex items-center "
                        onClick={() => storeDataToDatabase('/proceed-to-pay')}
                      >
                        <CiShoppingBasket className='text-2xl pr-1' />
                        Proceed to Checkout
                      </button>
                    </div>


                  </>
                  :
                  <>
                    <div className="">No product in cart</div>
                  </>
              }
            </div>
          </>
      }
    </>
  );
};

export default ViewCart;