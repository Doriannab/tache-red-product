import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


function Template () {
    return(
        <div className='flex w-full'>
            <div className="w-1/5">
            <Sidebar />
            </div>
            <div className="w-4/5">
            <div className="">
            <Navbar />
            </div>
            <div className=''>
                <Outlet/>
            </div>

            </div>
        </div>
    )
}
    

export default Template;