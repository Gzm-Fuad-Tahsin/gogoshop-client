import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingIcon from '../../pages/ErrorPages/LoadingIcon/LoadingIcon';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import Admin_StockItem from './Admin_StockItem';


const Admin_ProductList = () => {
    const [products,setProducts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {

            axios.get(`${import.meta.env.VITE_SERVER_ADDRESS}/admin/products-list`)
                .then(data => {
                    if (data.status === 200) {
                       
                        setProducts(data.data);
                        
                    }
                    

                })
        };

        fetchData();
    }, []);

 
 

    return (
        <>
            {
                products ?
                    <>
                        <div className='px-3 md:px-6 mt-5 md:mt-9  mx-auto'>
                            <div className=" w-full flex justify-between items-center" aria-label='title-bar'>
                                <p aria-label='title' className='text-xl'>Inventory</p>

                               
                            </div>

                            <div className='mt-5 md:mt-9 mx-auto  overflow-x-scroll '>

                                {/* table header */}
                                <div className="w-[1000px] 2xl:w-[1150px] 3xl:w-[1300px] mx-auto grid grid-cols-8 text-[#A3A3A3] text-base lg:text-lg">
                                    <div className="col-span-2 grid grid-cols-5 justify-center">
                                        <div className="col flex justify-center">#</div>
                                        <div className="col-span-4 flex justify-center">Thumbnail</div>

                                    </div>
                                    <div className="col-span-1 flex justify-center">Name</div>
                                    <div className="col-span-1 flex justify-center">Size</div>
                                    <div className="col-span-1 flex justify-center">Buying price</div>
                                    <div className="col-span-1 flex justify-center">Stock</div>
                                    <div className="col-span-1 flex justify-center">Last Updated</div>
                                    <div className="col-span-1 flex justify-center items-center">Action <BsChevronDown className='ml-1 text-[#494949] text-base' /></div>

                                </div>


                                {/* table body  */}

                                {
                                    products && products.map((product, _idx) => < Admin_StockItem 
                                    key={_idx} 
                                    count={_idx + 1}                 
                                    product={product} />)

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

export default Admin_ProductList;