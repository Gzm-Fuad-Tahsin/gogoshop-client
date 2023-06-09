import React from 'react';
import './ImageOverlayTex.css'
const ImageOverlayText = ({ data }) => {
    console.log(data)
    const { category_unique_name, category_name, img } = data
    return (
        <div className=' w-40 md:w-52 h-20 md:h-24 rounded-md hover:shadow-lg m-2  re'>
            

                <img src='https://source.unsplash.com/HkTMcmlMOUQ' className=' w-40 md:w-52 h-20 md:h-24 rounded-md' alt="" />
           
            <div className="boya">
                <h2>dfslkfjsdj</h2>
            </div>
        </div>
    );
};

export default ImageOverlayText;