import React from 'react';
import loadingGif from  '../../../assets/gif/loading.gif'
const LoadingIcon = () => {
  return (
    <div className="fixed inset-0 bg-white/10">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div role="status">
            <img src={loadingGif} alt="" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingIcon;
