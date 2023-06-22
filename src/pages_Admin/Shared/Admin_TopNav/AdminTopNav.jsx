import Reac from 'react';
import { Link } from 'react-router-dom';
import logoFull from '../../../assets/icons/logo-full.png';
import TopNavSearchField from '../../../pages/Shared/TopNavBar/TopNavSearchField';

const AdminTopNav = () => {
 








    return (
        <>


            <div className="navbar  bg-light-100 md:bg-white px-1  relative border-b-[1px] h-[64px]">


                {/* toggle button  */}
                <div className="navbar-start w-fit pl-2 md:pl-3 ">
                    <button className='text-slate-100 hover:text-slate-200 '>


                        <svg width="24" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.75" y1="-0.75" x2="25.25" y2="-0.75" transform="matrix(1 0 0 -1 0 18)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="0.75" y1="-0.75" x2="18.1591" y2="-0.75" transform="matrix(1 0 0 -1 0 9)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="0.75" y1="-0.75" x2="12.25" y2="-0.75" transform="matrix(1 0 0 -1 0 0)" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>

                    </button>



                    {/* logo  */}
                    <div className="hidden md:block ml-0 md:ml-2">
                        <Link to='/' className="indicator flex items-center  w-28 pl-3">
                            <img src={logoFull} alt='gogoshop logo' className='w-full' />

                        </Link>
                    </div>
                </div>




                {/* search bar  */}
                <div className="navbar-center grow pl-3  pr-2 justify-center">
                   <TopNavSearchField/>
                </div>




                <div className="navbar-end w-fit ">





                    {
                        
                        <div className='flex pr-1 md:pr-4 lg:pr-8 xl:pr-16' aria-label='admin-profile'>
                           admin
                        </div>
                    }



                </div>
            </div>




        </>
    );
};

export default AdminTopNav;