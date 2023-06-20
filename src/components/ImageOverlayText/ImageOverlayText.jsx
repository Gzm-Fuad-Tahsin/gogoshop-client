import React from 'react';
import './ImageOverlayTex.css'
const ImageOverlayText = ({ data }) => {

    const { category_unique_name, category_name, img } = data
    return (
        <div className=' flex items-center w-40 md:w-52 h-20 md:h-24 rounded-md hover:shadow-lg m-2 relative bg-light-100 '>
           
            <div className=" text-sm md:text-lg font-bold w-20 pl-3">
                <h2>{category_name}</h2>
            </div>
            <div className=''>
                <img src='https://i.ibb.co/WxRJSwV/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item-removebg-preview.png' className=' w-24 md:w-32 absolute bottom-0 right-0' alt="" />
                </div>
        </div>
    );
};

export default ImageOverlayText;