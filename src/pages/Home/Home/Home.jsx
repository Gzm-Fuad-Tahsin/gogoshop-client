import React, { useEffect } from 'react';



const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <div className="w-full"></div>
            {/* <ReviewCarts></ReviewCarts> */}
            {/* <ReviewCartsDiv></ReviewCartsDiv> */}
            {/* <Orderhistory></Orderhistory> */}
        </>
    );
};

export default Home;