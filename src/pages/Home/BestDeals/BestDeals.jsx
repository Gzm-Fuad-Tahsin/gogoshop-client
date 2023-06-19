import React, { useContext, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import { WebpageDataContext } from '../../../Layout/Main/Main';

const BestDeals = () => {
    const { AllproductsData } = useContext(WebpageDataContext);
    return (
        <>
            <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[700px] mx-auto"
      >
        <SwiperSlide>
        <div className="card-d border-2 w-[140px] h-[180px] md:w-[200px] md:h-[310px] lg:w-[220px] lg:h-[290px] hover:shadow-lg m-2">
        <Link >
          <figure>
            <img className="w-28 h-28 md:w-40 md:h-40 lg:w-38 lg:h-38 p-2" src={AllproductsData.img} />
          </figure>
          <div className="px-3">
            <div className="md:my-5 lg:my-1">
              <h2 className="card-d-title text-[11px] md:text-xl lg:text-lg font-normal">
                {AllproductsData.name}
              </h2>
              <p className="text-[9px] md:text-xs text-[#A9A9A9]">
                {AllproductsData.size}
              </p>

              <p className="flex text-[11px] md:text-lg text-[#807F7F]">
                <TbCurrencyTaka></TbCurrencyTaka>
                {AllproductsData.finalPrice}
                {AllproductsData.mainPrice && (
                  <s className="flex text-[11px] md:text-[13px] text-[#A9A9A9]">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {AllproductsData.mainPrice}
                  </s>
                )}
              </p>
            </div>
          </div>
        </Link>
        {/* {
          alreadyAdded ?
            <button  onClick={() => toast.error('Already Added')} className="btn btn-sm btn-circle bg-root-100 hover:bg-root-200 md:w-[190px] md:h-[38px] lg:w-[208px]  border-0 rounded-xl md:font-medium md:text-xl normal-case absolute bottom-1 right-1 md:bottom-1 md:left-1 md:gap-2">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <span className="hidden md:block">Added</span>
            </button>
            :
            <button onClick={() => updateCart({ product_id, quantity: 1 })} className="btn btn-sm btn-circle bg-root-100 hover:bg-root-200 md:w-[190px] md:h-[38px] lg:w-[208px]  border-0 rounded-xl md:font-medium md:text-xl normal-case absolute bottom-1 right-1 md:bottom-1 md:left-1 md:gap-2">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <span className="hidden md:block">Add to Cart</span>
            </button>
        } */}

      </div>
        </SwiperSlide>
        
      </Swiper>
        </>
    );
};

export default BestDeals;