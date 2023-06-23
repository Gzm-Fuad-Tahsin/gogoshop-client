import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Admin_ProductItem from './Admin_ProductItem';
import LoadingIcon from '../../pages/ErrorPages/LoadingIcon/LoadingIcon';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';


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

      //_________ handle change products status __________________
      const handleStatusChange = (product_slug,status) => {
        console.log(product_slug,status)
 
 
         // send to server 
     }
 
 
     //  _________ handle delete a subcategery __________
     const handleProductDelete = (product_slug) => {
         console.log(product_slug)
         const confirmed = confirm('Are you sure?');
         if(!confirmed){
             return;
         }
 
 
         console.log('delete chaise')
     }
    return (
        <>
            {
                products ?
                    <>
                        <div className='px-3 md:px-6 mt-5 md:mt-9 mx-auto'>
                            <div className=" w-full flex justify-between items-center" aria-label='title-bar'>
                                <p aria-label='title' className='text-xl'>Products</p>

                                <Link to='upload-subcategory' className='text-white bg-root-100 hover:bg-root-200 text-lg py-1  px-3 lg:px-5 rounded-3xl text-center'>Add New Product</Link>

                            </div>

                            <div className='mt-5 md:mt-9 mx-auto  overflow-x-scroll '>

                                {/* table header */}
                                <div className="w-[700px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1150px] 3xl:w-[1300px] mx-auto grid grid-cols-10 text-[#A3A3A3] text-lg mb-2">
                                    <div className="col-span-1 grid grid-cols-5 justify-center">
                                        <div className="col flex justify-center">#</div>
                                        <div className="col-span-4 flex justify-center">Thumbnail</div>

                                    </div>
                                    <div className="col-span-1 flex justify-center">Name</div>
                                    <div className="col-span-1 flex justify-center">Category</div>
                                    <div className="col-span-1 flex justify-center">Subcategory</div>
                                    <div className="col-span-1 flex justify-center">Stock</div>
                                    <div className="col-span-1 flex justify-center">Buying Price</div>
                                    <div className="col-span-1 flex justify-center">MRP.</div>
                                    <div className="col-span-1 flex justify-center">Selling Price</div>
                                    <div className="col-span-1 flex justify-center">Status</div>
                                    <div className="col-span-1 flex justify-center items-center">Action <BsChevronDown className='ml-1 text-[#494949] text-base' /></div>

                                </div>


                                {/* table body  */}

                                {
                                    products && products.map((product, _idx) => < Admin_ProductItem 
                                    key={_idx} 
                                    count={_idx + 1}                 
                                    product={product} 
                                    handleStatusChange={handleStatusChange}
                                    handleProductDelete={handleProductDelete} />)

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