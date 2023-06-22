import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/style.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { WebpageDataContext } from "../../../Layout/Main/Main";

const Banner = () => {
  const { topBanner } = useContext(WebpageDataContext);
  return (
    <>
      <div className=" mt-3 flex justify-center  md:px-0 w-full xmd:w-[500px]   md:w-[525px] lg:w-[780px] xl:w-[1120px] 2xl:w-[1270px] 3xl:w-[1420px] 4xl:w-[1650px] 5xl:w-[1900px] mx-auto">
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
          className="mySwiper w-full rounded-md md:rounded-none "
        >

          {/* image: 1500/600 */}
          {
            topBanner && topBanner.map((item, _idx) =>
              <SwiperSlide key={_idx}>
                <img src={item?.img} alt='top banner' loading="lazy" />
                <div className="swiper-lazy-preloader"></div>
              </SwiperSlide>
            )
          }

        </Swiper>
      </div>
    </>
  );
};

export default Banner;
