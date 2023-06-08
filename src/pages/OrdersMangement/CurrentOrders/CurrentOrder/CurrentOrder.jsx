import React from 'react';
import { fetchJson } from '../../../../assets/Scripts/utility';
import { useLoaderData } from 'react-router-dom';
import OrderItem from '../../../../components/OrderItem/OrderItem';
import PageTitle from '../../../../components/PageTitle/PageTitle';
import ScrollToTop from '../../../../components/ScrollToTop/ScrollTotop';


export async function loader({ params }) {

    return await fetchJson(`${import.meta.env.VITE_SERVER_ADDRESS}/allorders`);

}
const CurrentOrder = () => {
    const CurrentOrderData = useLoaderData();
    return (
        <>
        <ScrollToTop />
        <PageTitle text={"My orders"}/>
            <div className='flex flex-col items-center xl:w-[900px]'>
                {
                    CurrentOrderData.map((CurrentOrder,_idx) => <OrderItem key={_idx} orderData={CurrentOrder} redirectTo={`/orders/${CurrentOrder.id}`} />)
                }
            </div>
        </>
    );
};

export default CurrentOrder;