import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchJson } from '../../../../assets/Scripts/utility';
import PageTitle from '../../../../components/PageTitle/PageTitle';
import OrderItem from '../../../../components/OrderItem/OrderItem';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollTotop';


export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/allorders`);

}
const PreviousOrder = () => {
    const CurrentOrderData = useLoaderData();
    return (
        <div>
            <ScrollToTop />
            <PageTitle text={"Order History"} />
            <div className='flex flex-col items-center px-3 xl:w-[900px]'>
                {
                    CurrentOrderData.map((CurrentOrder, _idx) => <OrderItem key={_idx} orderData={CurrentOrder} redirectTo={`/order-history/${CurrentOrder.id}`} />)
                }
            </div>
        </div>
    );
};

export default PreviousOrder;