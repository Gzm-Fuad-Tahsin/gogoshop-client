import React from 'react';
import './ImageOverlayTex.css'
const ImageOverlayText = ({ data }) => {
    console.log(data)
    const { category_unique_name, category_name, img } = data
    return (
        <div className=' w-40 md:w-52 h-20 md:h-24 rounded-md hover:shadow-lg m-2  relative '>
            

                <img src='https://source.unsplash.com/HkTMcmlMOUQ' className=' w-40 md:w-52 h-20 md:h-24 rounded-md ' alt="" />
           
            <div className="absolute -translate-y-14 translate-x-4 text-white text-2xl font-medium">
                <h2>dfslkfjsdj</h2>
            </div>
        </div>
    );
};

export default ImageOverlayText;