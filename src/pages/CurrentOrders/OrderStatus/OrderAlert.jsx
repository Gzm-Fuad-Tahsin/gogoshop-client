import React from 'react';
import { Link } from 'react-router-dom';

const OrderAlert = () => {
    return (
        <div className='ml-4'>

            {/* The button to open modal */}
            <label htmlFor="my-modal-4" className="btn">Place order</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="my-modal-4" className=" btn-lg absolute right-1 cursor-pointer top-3 font-semibold">✕</label>
                    <h3 className="text-lg font-bold text-center">Congratulations!</h3>
                    <p className="py-4 mb-5 text-center">Your Order has been placed. Thank you for shopping with us!</p>
                   <div className='mb-3 mx-auto w-fit'>
                        <Link className='pt-4 pr-10 pb-4 pl-10 bg-[#4ABA6F] text-white rounded-3xl'>Check order status</Link>
                   </div>
                </label>
            </label>
        </div>
    );
};

export default OrderAlert;