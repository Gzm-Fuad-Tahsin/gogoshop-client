import React, { useContext } from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import IndividualProductbar from './individualProductbar';

const ViewCart = () => {
    const {cart} = useContext(UtilityContext);
    console.log(cart)
    return (
        <>
        <ScrollToTop/>
        <PageTitle text={'Cart'}/>
        <div>
            {
                cart.map(product => <IndividualProductbar
                key={product?.id}
                product={product}
                />


                )
            }
            
        </div>
        </>
    );
};

export default ViewCart;