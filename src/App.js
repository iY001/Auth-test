import React from 'react'
import { Routes , Route, Link } from 'react-router-dom'
import SignIn from "./Components/SignIn.jsx"
import SignUp from './Components/SignUp.jsx'
import AuthProvider from './Context/AuthContext.jsx'
import Profile from './Components/Profile.jsx'
function App() {
  return (
    <>
    <div className='flex flex-col mt-2 text-3xl space-y-3 justify-center text-center'>
        <p>Home</p>
        <section className='py-4'> 
        <Link to={"/signin"} className='py-2 px-6 mx-2 bg-orange-500 text-center text-md text-white'>Login</Link>
        <Link to={"/signup"} className='py-2 px-6 bg-orange-500 text-center text-md text-white mx-2'>Create An Account</Link>
        <Link to={"/profile"} className='py-2 px-6 bg-orange-500 text-center text-md text-white mx-2'>Profile</Link>
        </section>
      </div>

    <AuthProvider>
      <Routes>  
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/signin"} element={<SignIn/>}></Route>
        <Route path={"/signup"} element={<SignUp/>}></Route>
        <Route path={"/profile"} element={<Profile/>}></Route>
      </Routes>
    </AuthProvider>


    </>
  )
}

export default App