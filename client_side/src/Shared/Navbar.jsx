import React, { useState } from 'react';
import darklogo from '../assets/darklogo.png'
import whitelogo from '../assets/whitelogo.png'
import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";

const Navbar = () => {
    return (
        <header>
            <nav className='bg-slate-200 px-4 py-2 w-full flex justify-between items-center'>
                <div className='w-[150px]'>
                    <img src={darklogo} className='' />
                </div>
                <div>
                <div className="drawer z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="drawer-button"><IoMenu className='text-3xl'/></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <div className='space-y-3'>
        <div className='p-6 rounded-full border flex items-center gap-x-2'>
            <CiUser className='text-3xl'/>
            <p className='text-base'>Amdadul Haque Bhuiyan</p>
        </div>
        <div className='p-6 rounded-full border flex items-center gap-x-2'>
            <VscHistory className='text-3xl'/>
            <p className='text-base'>Payments History</p>
        </div>
      </div>
    </div>
  </div>
</div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;