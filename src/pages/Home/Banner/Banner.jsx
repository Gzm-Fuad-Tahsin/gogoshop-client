import React from 'react';
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
        <div className=' mt-3 flex justify-center px-3 md:px-0'>
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
        className="mySwiper w-full aspect-[9/3] rounded-md md:rounded-none mx-auto"
      >
        <SwiperSlide><img src="https://previews.123rf.com/images/hstrongart/hstrongart1810/hstrongart181000124/110980363-mango-smoothie-banner-ads-with-splashing-beverage-pouring-into-take-out-cup-in-3d-illustration-on.jpg" alt="" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/3a522537849839.5762514421f26.png" alt="" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2dbe9e99759469.5efa141005230.png" alt="" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src="https://www.johnsonsbaby.in/sites/jbaby_in/files/slide-images/gentle_touch_banner_4284x1700px.jpg" alt="" className='w-full' /></SwiperSlide>
      </Swiper>
        </div>
        </>
    );
};

export default Banner;