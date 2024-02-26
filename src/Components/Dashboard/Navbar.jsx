import React from 'react'
import { useAuth } from '../../Context/AuthContext';
import { redirect } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import Sidebar from './Sidebar';


function Navbar({ showSidebar, setShowSidebar }) {

    const { logout, currentUser } = useAuth()
    const handleLogout = async () => {
        try {
            await logout();
            alert('Logged Out');
            redirect('/login')
        } catch {
            alert('Failed to log out');
        }
    };

    return (
        <>
            <div className='relative md:w-full w-full flex items-center justify-between md:pr-6 pr-2 py-5 bg-main shadow-lg'>
                <section>
                    {/*aside*/}
                    <div className='absolute top-0'>
                        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                    </div>
                    {/*aside*/}
                </section>
                <section className='flex items-center'>
                    <h1 className='text-xl text-gray-300 mx-4'>{currentUser.displayName}</h1>
                    <button onClick={handleLogout} className=' text-red-600 hover:text-red-600 mt-1'><IoLogOutOutline className='h-fit text-2xl' />
                    </button>
                </section>
            </div>
            sad
        </>
    )
}

export default Navbar