import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";

const Sidebar = ({ showSidebar, setShowSidebar }) => {


    return (
        <div className={`fixed h-screen bg-gray-100 text-gray-900 duration-300 transition-all ease-in transform shadow-lg ${showSidebar ? 'w-[14rem]' : 'w-[4.2rem]'}`}>
            <div className="flex  w-full items-center border-b border-gray-200 h-[4.2rem] px-4">
                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="text-4xl text-black"
                >
                    <HiOutlineMenu />
                </button>

                {
                    showSidebar && <h1 className='px-4 font-[Montserrat] font-medium text-black text-xl'>Menu</h1>
                }
            </div>
            {/* Menu Button*/}
            <div className="flex flex-col py-4 duration-300">

                <Link to={"/"} className="flex cursor-pointer py-4 px-4 text-main  focus:bg-main foucs:text-white focus:bg-opacity-30 active:bg-main active:text-white ">
                    <FaHouse className="text-4xl duration-300" />
                    {showSidebar && <h1 className='px-4 mt-1 font-[Montserrat] font-medium text-xl'>Home</h1>}
                </Link>
                <Link to={"/dashboard"} className="flex cursor-pointer py-4 px-4 text-main  focus:bg-main foucs:text-white focus:bg-opacity-30 active:bg-main active:text-white ">
                    <MdDashboard className="text-4xl duration-300" />
                    {showSidebar && <h1 className='px-4 mt-1 font-[Montserrat] font-medium text-xl'>Dashboard</h1>}
                </Link>
            </div>
        </div>

    );
};

export default Sidebar;
