import React, { useEffect } from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import SecondBanner from '../Banner/SecondBanner';




const Home = () => {
    return (
        <>
            <ScrollToTop />

            <Banner />

            <AllCategories />

            {/* <SecondBanner /> */}


        </>
    );
};

export default Home;