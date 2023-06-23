import React, { useContext, useState } from 'react';


import { Avatar } from '@mui/material';
import { AdminDataContext } from '../../../../Layout/Admin/Admin';
import Admin_SIdeNav_Mobile_Item from './Admin_SIdeNav_Mobile_Item';


const profileItemsStyles = {
  display: 'block', padding: '0.25rem 1rem', fontSize: '0.875rem', ':hover': { backgroundColor: '#F9FAFB' }

}

const Admin_SideNav_Mobile = ({ setsideNavstate }) => {

    const { adminSideNavData } = useContext(AdminDataContext);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);

  };



  return (
    <aside style={{ backgroundColor: 'white', color: 'black',paddingTop: '0.9rem' }}>
        
      {/* categories  */}
      <ul>
        {
          adminSideNavData.map((item, _idx) => (
            <li key={_idx}>
              <Admin_SIdeNav_Mobile_Item data={item} setsideNavstate={setsideNavstate} />
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Admin_SideNav_Mobile;
