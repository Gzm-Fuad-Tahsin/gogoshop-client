import React from 'react';
import { fetchJson } from '../../assets/Scripts/utility';
import { useLoaderData } from 'react-router-dom';
import OrderItem from '../../components/OrderItem/OrderItem';
import PageTitle from '../../components/PageTitle/PageTitle';

export async function loader({ params }) {

    return await fetchJson("cart.json");

}
const PreviousOrder = () => {
    const CurrentOrderData = useLoaderData();
    return (
        <div>
            <PageTitle text={"My Orders"} />
            <div className='flex flex-col items-center xl:w-[900px]'>
                {
                    CurrentOrderData.cartList.map(CurrentOrder => <OrderItem key={CurrentOrder.id} orderData={CurrentOrder} redirectTo={`/order/${CurrentOrder.id}`} />)
                }
            </div>
        </div>
    );
};

export default PreviousOrder;