import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { GrHomeRounded } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';


const BottomBar = () => {
    return (



        <div className="fixed bottom-0 w-screen bg-white  ">
            <ul className="flex items-center justify-between px-10 py-3 shadow-inner">


                <li>
                    <Link to='/' className='flex flex-col items-center  relative '>
                     
                            <GrHomeRounded className='text-2xl'/>
                       
                        <span className='text-sm'>Home</span>

                    </Link>
                </li>
                <li>
                    <Link to='/cart' className='flex flex-col items-center   relative '>
                        
                            <FiShoppingBag className='text-2xl'/>
                       
                        <span className='text-sm'>Cart</span>

                    </Link>
                </li>
                <li>
                    <Link to='/profile' className='flex flex-col items-center   relative '>
                      
                            <BsPerson className='text-2xl'/>
                        
                        <span className='text-sm'>Profile</span>

                    </Link>
                </li>

            </ul>


        </div>

    );
};

export default BottomBar;