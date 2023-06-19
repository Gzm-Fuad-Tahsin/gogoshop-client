import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillClipboard2CheckFill } from 'react-icons/bs';
import { GoChevronRight } from 'react-icons/go';


import { UtilityContext } from '../../../../Contexts/Utility/UtilityProvider';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import { WebpageDataContext } from '../../../../Layout/Main/Main';

import Mobile_SideNavItem from '../SideNavbarItem/Mobile_SideNavItem';


const profileItemsStyles = {
  display: 'block', padding: '0.25rem 1rem', fontSize: '0.875rem', ':hover': { backgroundColor: '#F9FAFB' }

}

const MobileSideNav = ({ setsideNavstate }) => {


  const { screenWidth } = useContext(UtilityContext);
  const { user } = useContext(AuthContext);
  const { categories } = useContext(WebpageDataContext);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);

  };

  return (
    <aside style={{ backgroundColor: 'white', color: 'black' }}>



      {
        user ?
          (
            <div style={{ position: 'relative' }}>
              <div
                onClick={toggleMenu}
                style={{
                  padding: '0.6rem 0.3rem 0.6rem 0.3rem',
                  borderBottom: '1px solid #cbd5e0',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                  <img style={{ borderRadius: '0.5rem', width: '3rem' }} src={user?.imgURL} alt="User Image" />


                  <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <p>{user?.name}</p>
                    <p style={{ fontSize: '0.875rem', color: '#9CA3AF', cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}>{user?.id}</p>
                  </div>


                </div>

                <GoChevronRight style={{
                  color: '#4A5568',
                  width: '1.25rem',
                  height: '1.25rem',
                  transition: 'transform 200ms ease',
                  transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
                }} />

              </div>
              {open && (
                <ul style={{ listStyleType: 'none', padding: '0.5rem',marginBottom:'0.3rem', color: '#374151' , borderBottomWidth:'1px'}}>
                  <li onKeyDown={() => { setsideNavstate(false) }} onClick={() => { setsideNavstate(false) }}>
                    <Link to='/profile' style={profileItemsStyles} role="menuitem">Profile</Link>
                  </li>
                  <li onKeyDown={() => { setsideNavstate(false) }} onClick={() => { setsideNavstate(false) }}>
                    <Link to='/update-profile' style={profileItemsStyles} role="menuitem">Update information</Link>
                  </li>
                  <li onKeyDown={() => { setsideNavstate(false) }} onClick={() => { setsideNavstate(false) }}>
                    <Link to='/orders' style={profileItemsStyles} role="menuitem">My orders</Link>
                  </li>
                  <li onKeyDown={() => { setsideNavstate(false) }} onClick={() => { setsideNavstate(false) }}>
                    <Link to='/order-history' style={profileItemsStyles} role="menuitem">Order History</Link>
                  </li>
                  <li onKeyDown={() => { setsideNavstate(false) }} onClick={() => { setsideNavstate(false) }}>
                    <Link style={profileItemsStyles} role="menuitem">Sign out</Link>
                  </li>
                </ul>
              )}
            </div>
          )
          :
          (
            <Link to='/login' style={{ padding: '0.5rem 1rem', borderBottom: '1px solid', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '0.25rem', position: 'relative', width: '2rem', height: '2rem', overflow: 'hidden', backgroundColor: '#F9FAFB', borderRadius: '0.75rem' }}>
                <BsFillClipboard2CheckFill style={{ position: 'absolute', width: '2.5rem', height: '2.5rem', top: '50%', left: '-0.25rem', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
              </div>
              <p>Sign In</p>
            </Link>
          )
      }


      {/* categories  */}
      <ul>
        {Array.isArray(categories) &&
          categories.map((item, _idx) => (
            <li key={_idx}>
              <Mobile_SideNavItem data={item} setsideNavstate={setsideNavstate} />
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default MobileSideNav;
