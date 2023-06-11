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
      <div className=" mt-3 px-3 flex justify-center">
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
          className="mySwiper w-[500px] lg:w-[730px] xl:w-[1050px] mx-auto rounded-lg md:rounded-2xl"
        >

          {/* image: 1500/500 */}
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              className="w-full"
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              className="w-full"
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              className="w-full"
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=500"
              alt=""
              className="w-full"
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SecondBanner;
