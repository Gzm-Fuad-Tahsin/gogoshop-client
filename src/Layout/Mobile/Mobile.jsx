import React, { useContext } from 'react';

import SideNavbar from '../../pages/Shared/SideNavbar/SideNavbar/SideNavbar';
import Footer from '../../pages/Shared/Footer/Footer';
import { UtilityContext } from '../../Contexts/Utility/UtilityProvider';
import BottomBar from '../../pages/Shared/BottomBar/BottomBar';
import MobileTopNav from '../../pages/Shared/TopNavBar/MobileTopNav';

const Mobile = ({ children }) => {
    const { screenWidth, showSideNav } = useContext(UtilityContext);
    return (
        <>
            <div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
                {/* <TopNavbar /> */}
                <MobileTopNav />
            </div>
            <div className="flex relative">
                {showSideNav && (
                    <div
                        className={`min-w-[240px]  w-60 h-screen  overflow-y-auto  ${screenWidth < 768 ? "fixed" : "sticky"
                            } top-[64px] z-40   bg-white flex flex-col `}
                    >
                        <SideNavbar />
                    </div>
                )}
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

{/* <>
<div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
   
    <TopNav />
</div>
<div className="flex relative">
    {showSideNav && (
        <div
            className={`min-w-[240px]  w-60 h-screen  overflow-y-auto  ${screenWidth < 768 ? "fixed" : "sticky"
                } top-[64px] z-40   bg-white flex flex-col `}
        >
            <SideNavbar />
        </div>
    )}
    <div className="w-full">
        {
            children
        }
        <Footer />
    </div>

    <BottomBar />
</div>
</> */}