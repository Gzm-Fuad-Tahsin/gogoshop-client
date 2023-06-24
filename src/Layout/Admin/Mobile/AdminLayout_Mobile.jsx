import React from 'react';
import Admin_TopNav_Mobile from '../../../pages_Admin/Shared/Admin_TopNav/Admin_TopNav_Mobile/Admin_TopNav_Mobile';

const AdminLayout_Mobile = ({ children }) => {
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