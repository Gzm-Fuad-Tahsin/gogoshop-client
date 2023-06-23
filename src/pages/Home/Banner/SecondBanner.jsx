import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { WebpageDataContext } from "../../../Layout/User/Main";

const SecondBanner = () => {
  const { bottomBanner } = useContext(WebpageDataContext);
  return (
    <>
      <div className=" my-16 px-3 flex justify-center  w-full xmd:w-[480px] md:w-[520px] lg:w-[780px] xl:w-[950px] 2xl:w-[1200px] 3xl:w-[1380px] 4xl:w-[1600px] 5xl:w-[1850px] mx-auto ">
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
          {
            bottomBanner && bottomBanner.map((item, _idx) =>
              // image 1500 1500
              <SwiperSlide key={_idx}>
                <img src={item?.img} alt='bottom banner' loading="lazy" />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            )
          }

        </Swiper>
      </div>
    </>
  );
};

export default SecondBanner;
