import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../BestDeals/bestDeals.module.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { TbCurrencyTaka } from 'react-icons/tb';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { cartDataContext } from '../../../Contexts/CartDataProvider/CartDataProvider';



const ShowBestDeals = () => {
    const  [ products, setProducts ]  = useState([]);

    useEffect( () =>{
      fetch('bestdeals.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const { cart, updateCart } = useContext(cartDataContext);

  const [alreadyAdded, setAlreadyAdded] = useState(false);

    return (
      
        <>
        <h1 className='text-center text-xl font-extralight my-5'>Today&#39;s Best Deals</h1>
        <div className='w-[300px] h-[169px] md:w-[430px] md:h-[200px] lg:w-[800px] lg:h-[300px] bg-[#ECFAEE] mx-auto flex items-center rounded-[20px]'>
        <Swiper
        slidesPerView={1}
        spaceBetween={5}
        navigation={{ prevEl: `.${styles['swiper1-button-prev']}`, nextEl: `.${styles['swiper1-button-next']}` }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-[270px] md:w-[400px] lg:w-[700px]"
        
        
      >
        
          {
            products.map(product => ( <SwiperSlide
            key={product.id}>
            <div className="w-[110px] h-[140px] md:w-[118px] md:h-[170px] lg:w-40 lg:h-60 hover:shadow-lg bg-white mx-auto rounded-[20px]">
        <Link >
          <figure>
            <img className="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-36 lg:h-32 rounded-[20px] mx-auto" src={product.img} />
          </figure>
          <div className="px-3 w-36 mx-auto">
            <div className="lg:mt-2 lg:my-1">
              <h2 className="text-[11px] lg:text-base font-normal">
                {product.name}
              </h2>
              <p className="text-[8px] text-[#A9A9A9]">
                {product.size}
              </p>

              <p className="flex text-[9px] lg:text-sm text-[#807F7F]">
                <TbCurrencyTaka></TbCurrencyTaka>
                {product?.sellingPrice}
                {(product?.MRP !==product?.sellingPrice) && (
                  <s className="flex text-[9px] lg:text-xs text-[#A9A9A9]">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {product.MRP}
                  </s>
                )}
              </p>
            </div>
          </div>
        </Link>
        <button className="flex items-center justify-center bg-root-100 text-white hover:bg-root-200 md:w-28 md:h-6 lg:h-[38px] lg:w-36 border-0 rounded-full md:text-[13px] lg:font-medium lg:text-lg normal-case md:gap-2 md:inset-x-2.5 lg:inset-x-3 p-1 absolute bottom-1 right-4">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <span className="hidden md:block">Add to Cart</span>
            </button>
      </div>
            </SwiperSlide>)
          )}
          
        </Swiper>
        </div>
        </>
    );
};

export default ShowBestDeals;