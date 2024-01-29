import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function Home() {
  const { currentUser } = useAuth()
  return (
    <>
      <div className='flex flex-col mt-2 text-3xl space-y-3 justify-center text-center'>
        <p>Home</p>
        <section className='py-4'>
          <Link to={"/"} className='py-2 px-6 mx-2 bg-orange-500 text-center text-md text-white'>Home</Link>
          <Link to={"/signin"} className='py-2 px-6 mx-2 bg-orange-500 text-center text-md text-white'>Login</Link>
          <Link to={"/signup"} className='py-2 px-6 bg-orange-500 text-center text-md text-white mx-2'>Create An Account</Link>
          {
            currentUser && <Link to={"/profile"} className='py-2 px-6 bg-orange-500 text-center text-md text-white mx-2'>Profile</Link>
          }

        </section>
      </div>
      <Outlet />
    </>
  )
}

export default Home