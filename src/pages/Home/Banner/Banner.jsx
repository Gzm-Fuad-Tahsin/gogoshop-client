import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/style.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <div className=" mt-3 flex justify-center px-3 md:px-0">
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
          rewind={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-[520px] lg:w-[780px] xl:w-[1120px] 2xl:w-[2350px] rounded-md md:rounded-none mx-auto"
        >

          {/* image: 1500/600 */}
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1500&h=600"
              alt=""
              className="w-full "
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1500&h=600"
              alt=""
              className="w-full "
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=600"
              alt=""
              className="w-full "
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&h=600"
              alt=""
              className="w-full "
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
