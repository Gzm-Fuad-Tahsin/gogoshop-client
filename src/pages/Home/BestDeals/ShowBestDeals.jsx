import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { TbCurrencyTaka } from 'react-icons/tb';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const ShowBestDeals = () => {
    const  [ products, setProducts ]  = useState([]);

    useEffect( () =>{
      fetch('bestdeals.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const { cart, updateCart } = useContext(UtilityContext);

  const [alreadyAdded, setAlreadyAdded] = useState(false);

  // useEffect(() => {

  //   if (cart.find(products => products.id === id)) {
  //     setAlreadyAdded(true);
  //   }

  // }, [cart, id])

    return (
      
        <>
        <h1 className='text-center text-xl font-extralight my-5'>Today's Best Deals</h1>
        <div className='w-[380px] lg:w-[800px] lg:h-[300px] bg-[#ECFAEE] mx-auto rounded-[20px] flex items-center'>
        <Swiper
        slidesPerView={4}
        spaceBetween={110}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        
        modules={[Navigation, Autoplay]}
        className="mySwiper w-[700px]"
        breakpoints={{
          // When window width is <= 576px
          576: {
            slidesPerView: 2, // Number of slides per view for small screens
          },
          // When window width is <= 768px
          768: {
            slidesPerView: 2, // Number of slides per view for medium screens
          }
          // Add more breakpoints as needed
        }}
      >
        
          {
            products.map(product => ( <SwiperSlide
            key={product.id}>
            <div className="card-d w-[110px] h-[140px] lg:w-40 lg:h-60 hover:shadow-lg m-2 bg-white">
        <Link >
          <figure>
            <img className="w-[80px] h-[80px] md:w-40 md:h-40 lg:w-32 lg:h-32" src={product.img} />
          </figure>
          <div className="px-3">
            <div className="mt-2 md:my-5 lg:my-1">
              <h2 className="card-d-title text-[11px] md:text-base font-normal">
                {product.name}
              </h2>
              <p className="text-[8px] text-[#A9A9A9]">
                {product.size}
              </p>

              <p className="flex text-[9px] md:text-sm text-[#807F7F]">
                <TbCurrencyTaka></TbCurrencyTaka>
                {product.finalPrice}
                {product.mainPrice && (
                  <s className="flex text-[9px] md:text-xs text-[#A9A9A9]">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {product.mainPrice}
                  </s>
                )}
              </p>
            </div>
          </div>
        </Link>
        {
          // alreadyAdded ?
          //   <button  onClick={() => toast.error('Already Added')} className="btn btn-sm btn-circle bg-root-100 hover:bg-root-200 md:w-[190px] md:h-[38px] lg:w-[208px]  border-0 rounded-xl md:font-medium md:text-xl normal-case absolute bottom-1 right-1 md:bottom-1 md:left-1 md:gap-2">
          //     <AiOutlineShoppingCart></AiOutlineShoppingCart>
          //     <span className="hidden md:block">Added</span>
          //   </button>
          //   :
            <button onClick={() => updateCart({ product_id, quantity: 1 })} className="btn btn-sm btn-circle bg-root-100 hover:bg-root-200 md:w-40 border-0 rounded-xl md:font-medium md:text-xl normal-case absolute bottom-1 right-1 md:bottom-2 md:left-0 md:gap-2">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <span className="hidden md:block text-base">Add to Cart</span>
            </button>
        }

      </div>
            </SwiperSlide>)
          )}
          

        </Swiper>
        </div>
        </>
    );
};

export default ShowBestDeals;