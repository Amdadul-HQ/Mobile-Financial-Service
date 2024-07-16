import React, { useState } from 'react';
import darklogo from '../assets/darklogo.png'
import whitelogo from '../assets/whitelogo.png'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    return (
        <header>
            <nav className='bg-slate-200 px-4 py-2 w-full flex justify-between items-center'>
                <div className='w-[150px]'>
                    <img src={darklogo} className='' />
                </div>
                <div>
                <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="drawer-button"><IoMenu className='text-3xl'/></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;