import React, { useEffect } from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import SecondBanner from '../Banner/SecondBanner';
import { useContext } from 'react';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';




const Home = () => {
    const {setShowSideNav} = useContext(UtilityContext);
    useEffect(()=>{setShowSideNav(true)},[]);
    return (
        <>
            <ScrollToTop />

            <Banner />

            <AllCategories />

           {/* <BestDeals></BestDeals> */}

            <SecondBanner />

            


        </>
    );
};

export default Home;