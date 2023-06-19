import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SecondBanner = () => {
  return (
    <>
      <div className=" mt-3 px-3 flex justify-center  w-full xmd:w-[480px] md:w-[520px] lg:w-[780px] xl:w-[950px] 2xl:w-[1200px] 3xl:w-[1380px] 4xl:w-[1600px] 5xl:w-[1850px] mx-auto ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full rounded-lg md:rounded-2xl"
        >

          {/* image: 1500/500 */}
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              // className="w-full"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              // className="w-full"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              // className="w-full"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              // className="w-full"
              loading="lazy"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SecondBanner;
