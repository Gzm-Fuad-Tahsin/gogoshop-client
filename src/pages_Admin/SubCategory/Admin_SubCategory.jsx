import React, { useEffect, useState } from 'react';
import { fetchJson } from '../../assets/Scripts/utility';
import LoadingIcon from '../../pages/ErrorPages/LoadingIcon/LoadingIcon';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import Admin_subcategoryItem from './Admin_subcategoryItem';


const SubCategory = () => {

    const [subcategories, setsubcategories] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/subcategory-list`);
                setsubcategories(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    //_________ handle change subcategory status __________________
    const handleStatusChange = (subcategory_slug,status) => {
       console.log(subcategory_slug,status)


        // send to server 
    }


    //  _________ handle delete a subcategery __________
    const handleSubcategoryDelete = (subcategory_slug) => {
        console.log(subcategory_slug)
        const confirmed = confirm('Are you sure?');
        if(!confirmed){
            return;
        }


        console.log('delete chaise')
    }

    return (
        <>
            {
                subcategories ?
                    <>
                        <div className='px-3 md:px-10 mt-5 md:mt-9 mx-auto'>
                            <div className=" w-full flex justify-between items-center" aria-label='title-bar'>
                                <p aria-label='title' className='text-xl'>Subcategories</p>

                                <Link to='upload-subcategory' className='text-white bg-root-100 hover:bg-root-200 text-lg py-1  px-5 rounded-3xl text-center'>Add Subcategory</Link>

                            </div>

                            <div className='mt-5 md:mt-9 mx-auto  overflow-x-scroll '>

                                {/* table header */}
                                <div className="w-[700px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1150px] 3xl:w-[1300px] mx-auto grid grid-cols-11 text-[#A3A3A3] text-lg mb-2">
                                    <div className="col-span-2 grid grid-cols-5 justify-center">
                                        <div className="col flex justify-center">#</div>
                                        <div className="col-span-4 flex justify-center">Thumbnail</div>

                                    </div>
                                    <div className="col-span-2 flex justify-center">Subcategory</div>
                                    <div className="col-span-2 flex justify-center">Category</div>
                                    <div className="col-span-1 flex justify-center">Product</div>
                                    <div className="col-span-2 flex justify-center">Status</div>
                                    <div className="col-span-2 flex justify-center items-center">Action <BsChevronDown className='ml-1 text-[#494949] text-base' /></div>

                                </div>


                                {/* table body  */}

                                {
                                    subcategories && subcategories.map((subcategory, _idx) => < Admin_subcategoryItem 
                                    key={_idx} 
                                    count={_idx + 1}                 
                                    subcategory={subcategory} 
                                    handleStatusChange={handleStatusChange}
                                    handleSubcategoryDelete={handleSubcategoryDelete} />)

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

export default SubCategory;