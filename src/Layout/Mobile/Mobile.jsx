import React, { useContext } from 'react';

import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar/SideNavbar';
import Footer from '../../pages/Shared/Footer/Footer';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import BottomBar from '../../pages/Shared/BottomBar/BottomBar';
import MobileTopNav from '../../pages/Shared/TopNavBar/Mobile_TopNav';

const Mobile = ({ children }) => {
    
    return (
        <>
            <div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
                {/* <TopNavbar /> */}
                <MobileTopNav />
            </div>
            <div className="flex relative">
                <div className="w-full">
                    {
                        children
                    }
                    <Footer />
                </div>
                <BottomBar />
            </div>
        </>
    );
};

export default Mobile;
