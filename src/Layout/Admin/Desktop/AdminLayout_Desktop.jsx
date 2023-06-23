import React, { useContext } from 'react';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';
import { NavLink } from 'react-router-dom';
import AdminTopNav from '../../../pages_Admin/Shared/Admin_TopNav/Admin_TopNav_Desktop/AdminTopNav_Desktop';
import Admin_SideNav_Desktop from '../../../pages_Admin/Shared/Admin_SideNav/Admin_SideNav_Desktop/Admin_SideNav_Desktop';

const AdminLayout_Desktop = ({children}) => {
    const { showSideNav } = useContext(UtilityContext);
    return (
        <>
            <div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
                <AdminTopNav />
            </div>
            <div className="flex relative">
                {showSideNav && (
                    <div
                        className={`min-w-[240px]  w-60 h-screen  overflow-y-auto  sticky top-[64px] z-40   bg-white flex flex-col `}
                    >
                      <Admin_SideNav_Desktop/>
                    </div>
                )}
               
                <div className="w-full">
                   {
                    children
                   }
                </div>


            </div>
        </>
    )
};

export default AdminLayout_Desktop;