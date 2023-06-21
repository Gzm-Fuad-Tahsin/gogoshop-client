import React, { useEffect } from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import AllCategories from '../AllCategories/AllCategories';
import Banner from '../Banner/Banner';
import SecondBanner from '../Banner/SecondBanner';
<<<<<<< HEAD
import ShowBestDeals from '../BestDeals/ShowBestDeals';
=======
import { useContext } from 'react';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
>>>>>>> e5af0c00a25bddb5e979940d76ad7a83a9b29cd4




const Home = () => {
    const {setShowSideNav} = useContext(UtilityContext);
    useEffect(()=>{setShowSideNav(true)},[]);
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