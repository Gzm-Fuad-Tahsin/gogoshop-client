import React, { useContext } from 'react';
import { AdminDataContext } from '../../../../Layout/Admin/Admin';
import Admin_SideNav_Desktop_Item from './Admin_SideNav_Desktop_Item';

const Admin_SideNav_Desktop = () => {
    const { adminSideNavData } = useContext(AdminDataContext);

    return (
        <aside className="border-r bg-white text-black font-medium">


            <ul className='mt-3'>

                {


                    adminSideNavData.map((item, _idx) => <li key={_idx} className='mb-3'>
                        <Admin_SideNav_Desktop_Item data={item} />
                    </li>
                    )

                }


            </ul>



        </aside>
    );
};

export default Admin_SideNav_Desktop;