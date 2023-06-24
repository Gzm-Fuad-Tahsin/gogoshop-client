import React from 'react';
import Admin_StockItem_action from './Admin_StockItem_action';
const Admin_StockItem = ({ count, product, handleStatusChange, handleProductDelete }) => {

    const {  img, name, size, slug_name,stock,buyingPrice,timestamps} = product;

    return (
        <div className="w-[1000px] 2xl:w-[1150px] 3xl:w-[1300px] mx-auto grid grid-cols-8 text-[#434343] bg-white hover:bg-slate-100 text-base py-2 border-b">

            <div className="col-span-2 grid grid-cols-5 justify-center items-center  text-center">
                <div className="col flex justify-center">{count}</div>
                <div className="col-span-4 flex justify-center items-center">
                    <img src={img} alt={name} className='w-10 h-10' />
                </div>

            </div>
          
            <div className="col-span-1 flex justify-center items-center text-center">{name}</div>
            <div className="col-span-1 flex justify-center items-center text-center">{size}</div>
            <div className="col-span-1 flex justify-center items-center text-center">{buyingPrice}</div>
            <div className="col-span-1 flex justify-center items-center text-center text-lg">{stock}</div>
            <div className="col-span-1 flex justify-center items-center text-center">{timestamps}</div>
             {/* action button  */}
             <div className="col-span-1 flex justify-center  items-center cursor-pointer">
                <Admin_StockItem_action slug_name={slug_name} handleProductDelete={handleProductDelete}/>
               
                </div>

        </div>
    );
};

export default Admin_StockItem;