import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../assets/Scripts/utility';
import LoadingIcon from '../../pages/ErrorPages/LoadingIcon/LoadingIcon';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import Admin_CategoryItem from './Admin_CategoryItem';


const Category = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/category-list`);
                setCategories(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    //_________ handle change category status __________________
    const handleStatusChange = (category_slug,status) => {
       console.log(category_slug,status)


        // send to server 
    }


    //  _________ handle delete a categery __________
    const handleCategoryDelete = (category_slug) => {
        console.log(category_slug)
        const confirmed = confirm('Are you sure?');
        if(!confirmed){
            return;
        }


        console.log('delete chaise')
    }

    return (
        <>
            {
                categories ?
                    <>
                        <div className='px-3 md:px-10 mt-5 md:mt-9 mx-auto'>
                            <div className=" w-full flex justify-between items-center" aria-label='title-bar'>
                                <p aria-label='title' className='text-xl'>Main Categories</p>

                                <Link to='upload-category' className='text-white bg-root-100 hover:bg-root-200 text-lg py-1  px-3 lg:px-5 rounded-3xl text-center'>Add New Category</Link>

                            </div>

                            <div className='mt-5 md:mt-9 mx-auto  overflow-x-scroll '>

                                {/* table header */}
                                <div className="w-[700px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1150px] 3xl:w-[1300px] mx-auto grid grid-cols-11 text-[#A3A3A3] text-lg mb-2">
                                    <div className="col-span-3 grid grid-cols-5 justify-center">
                                        <div className="col flex justify-center">#</div>
                                        <div className="col-span-4 flex justify-center">Thumbnail</div>

                                    </div>
                                    <div className="col-span-2 flex justify-center">Category</div>
                                    <div className="col-span-2 flex justify-center">Subcategory</div>
                                    <div className="col-span-2 flex justify-center">Status</div>
                                    <div className="col-span-2 flex justify-center items-center">Action <BsChevronDown className='ml-1 text-[#494949] text-base' /></div>

                                </div>


                                {/* table body  */}

                                {
                                    categories && categories.map((category, _idx) => < Admin_CategoryItem 
                                    key={_idx} 
                                    count={_idx + 1}                 
                                    category={category} 
                                    handleStatusChange={handleStatusChange}
                                    handleCategoryDelete={handleCategoryDelete} />)

                                }


                            </div>
                        </div>
                    </>
                    :
                    <>
                        <LoadingIcon />
                    </>
            }
        </>

    );
};

export default Category;