import React, { useState, useEffect } from 'react';
import {  BsArrowUp } from 'react-icons/bs'
function ScrollToTopButton() {


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`fixed bottom-5 right-7 bg-light-200 text-gray-600 text-2xl p-3 rounded-full transition-opacity duration-300 `} onClick={scrollToTop}>
      <BsArrowUp/>
    </button>
  );
}

export default ScrollToTopButton;
