import React, { useEffect } from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import SecondBanner from '../Banner/SecondBanner';
import ShowBestDeals from '../BestDeals/ShowBestDeals';




const Home = () => {
    return (
        <>
            <ScrollToTop />

            <Banner />

            <AllCategories />

           <ShowBestDeals></ShowBestDeals>

            <SecondBanner />

            


        </>
    );
};

export default Home;