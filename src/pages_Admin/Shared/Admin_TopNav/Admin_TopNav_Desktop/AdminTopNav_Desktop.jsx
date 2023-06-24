import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../../../../assets/icons/logo-full.png';
import { FiLogOut } from 'react-icons/fi';
import { UtilityContext } from '../../../../Contexts/Utility/UtilityProvider';
import { AdminAuthContext } from '../../../../Contexts/AdminAuthProvider/AdminAuthProvider';

const AdminTopNav = () => {

    const {adminSignOut} = useContext(AdminAuthContext);
    const { showSideNav, setShowSideNav } = useContext(UtilityContext);









    return (
        <>


            <div className="navbar  bg-light-100 md:bg-white px-1  relative border-b-[1px] h-[64px]">


                {/* toggle button  */}
                <div className="navbar-start grow w-fit pl-2 md:pl-3 ">
                    <button className='text-slate-100 hover:text-slate-200 ' onClick={() => setShowSideNav(!showSideNav)}>


                        <svg width="24" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.75" y1="-0.75" x2="25.25" y2="-0.75" transform="matrix(1 0 0 -1 0 18)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="0.75" y1="-0.75" x2="18.1591" y2="-0.75" transform="matrix(1 0 0 -1 0 9)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="0.75" y1="-0.75" x2="12.25" y2="-0.75" transform="matrix(1 0 0 -1 0 0)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>

                    </button>



                    {/* logo  */}
                    <div className="ml-0 md:ml-2">
                        <Link to='/admin' className="indicator flex items-center  w-28 pl-3">
                            <img src={logoFull} alt='gogoshop logo' className='w-full' />
                        </Link>
                    </div>
                </div>

                {/* Logout admin */}
                <div className="navbar-end w-fit ">
                    {

                        <div className='flex justify-center items-center pr-1 md:pr-4 lg:pr-8 xl:pr-16' aria-label='admin-profile'>
                            <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500">
                                <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" ></path></svg>
                            </div>
                            <button className='pl-2 flex justify-center  items-center' onClick={adminSignOut}>
                                <FiLogOut className='mr-1' />
                                Log out
                            </button>
                        </div>
                    }
                </div>
            </div>




        </>
    );
};

export default AdminTopNav;