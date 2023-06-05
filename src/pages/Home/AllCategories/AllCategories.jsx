import React, { useContext } from 'react';
import { WebpageDataContext } from '../../../Layout/Main/Main';
import ImageOverlayText from '../../../components/ImageOverlayText/ImageOverlayText';

const AllCategories = () => {
    const {categories} = useContext(WebpageDataContext);
    return (
        <div className=' pt-4 md:pt-7'>
            <h2 className='text-center text-2xl md:text-3xl '>Our Categories</h2>
           <div className="flex flex-wrap justify-start">
            {
                categories.map(category=><ImageOverlayText key={category?._id} data={category} />)
            }
            
           </div>
        </div>
    );
};

export default AllCategories;