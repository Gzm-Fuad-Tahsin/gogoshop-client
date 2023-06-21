import React, { useContext } from 'react';
import { WebpageDataContext } from '../../../Layout/Main/Main';
import ImageOverlayText from '../../../components/ImageOverlayText/ImageOverlayText';

const AllCategories = () => {
    const {categories} = useContext(WebpageDataContext);
    return (
<<<<<<< HEAD
        <div className=' my-12 w-full md:w-[520px] lg:w-[780px] xl:w-[1000px] 2xl:w-[1270px] 3xl:w-[1420px] 4xl:w-[1650px] 5xl:w-[1900px] mx-auto'>
=======
       
        <div className=' pt-4 w-full xmd:w-[500px]   md:w-[525px] lg:w-[780px] xl:w-[1120px] 2xl:w-[1270px] 3xl:w-[1420px] 4xl:w-[1600px] 5xl:w-[1600px] mx-auto'>
>>>>>>> e5af0c00a25bddb5e979940d76ad7a83a9b29cd4
            <h2 className='text-center text-2xl md:text-3xl '>Our Categories</h2>
           <div className="flex  flex-wrap justify-center mt-4">
            {
                categories.map(category=><ImageOverlayText key={category?._id} data={category} />)
            }
            
           </div>
        </div>
    );
};

export default AllCategories;