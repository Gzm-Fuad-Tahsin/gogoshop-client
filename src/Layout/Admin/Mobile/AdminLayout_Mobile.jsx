import React, { useContext } from 'react';
import Admin_TopNav_Mobile from '../../../pages_Admin/Shared/Admin_TopNav/Admin_TopNav_Mobile/Admin_TopNav_Mobile';
import { AdminDataContext } from '../Admin';

const AdminLayout_Mobile = ({ children }) => {
    const {adminSideNavData} = useContext(AdminDataContext);
    console.log(adminSideNavData)
    return (
        <>
            <div className="w-screen border-b-[1px] max-w-full  sticky top-0 z-[1000] ">
               <Admin_TopNav_Mobile/>
            </div>
            <div className="flex relative">
                <div className="w-full">
                    {
                        children
                    }
                </div>

            </div>
        </>
    );
};

export default AdminLayout_Mobile;