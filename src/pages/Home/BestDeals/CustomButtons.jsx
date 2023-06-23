import React from 'react';
import { SwiperContext } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const CustomPrevButton = () => {
  const { onSlidePrev } = React.useContext(SwiperContext);

  return (
    <button className="swiper-button-prev" onClick={onSlidePrev}>
      <AiOutlineArrowLeft />
    </button>
  );
};

const CustomNextButton = () => {
  const { onSlideNext } = React.useContext(SwiperContext);

  return (
    <button className="swiper-button-next" onClick={onSlideNext}>
      <AiOutlineArrowRight />
    </button>
  );
};

export { CustomPrevButton, CustomNextButton };
