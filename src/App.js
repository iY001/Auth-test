import React, { useEffect } from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import SignIn from "./Components/SignIn.jsx"
import SignUp from './Components/SignUp.jsx'
import Profile from './Components/Profile.jsx'
import Home from './Pages/Home.jsx'
import { useAuth } from './Context/AuthContext.jsx'

function App() {

  const {currentUser} = useAuth()


  return (
    <>

      <Routes>  
        <Route path={"/"} element={<Home/> }>
        {
          currentUser && <Route path={"profile"} element={<Profile/>} />
        }
        <Route path={"signin"} element={<SignIn/>}></Route>
        <Route path={"signup"} element={<SignUp/>}></Route>
        
        </Route>
        <Route path={"*"} element={<Navigate to={"/"}/> }></Route>
      </Routes>

    </>
  )
}

export default App