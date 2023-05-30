import React, { useEffect } from 'react';

function SwipeNavigation({ showSideNavbySwipe, hideSideNavbySwipe }) {
  
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (event) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      const deltaX = event.changedTouches[0].clientX - startX;
      const deltaY = event.changedTouches[0].clientY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            showSideNavbySwipe();
        } else {
          hideSideNavbySwipe();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [showSideNavbySwipe, hideSideNavbySwipe]);

  return null; // or you can return an empty div if needed
}

export default SwipeNavigation;
