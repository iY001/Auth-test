import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <>
    <div className='flex flex-col justify-center h-screen space-y-10 text-center'>
    <h1 className='text-center text-red-500 text-4xl font-bold'>NOT FOUND</h1>
    <Link to={"/"} className=' py-2 px-6 mx-auto bg-orange-500 font-bold text-center text-md text-white'>Back to Home</Link>
    </div>

    </>
  )
}

export default Notfound