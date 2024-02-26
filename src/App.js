import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from "./Components/SignIn.jsx"
import SignUp from './Components/SignUp.jsx'
import Profile from './Components/Profile.jsx'
import Home from './Pages/Home.jsx'
import { useAuth } from './Context/AuthContext.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Notfound from './Pages/Notfound.jsx'

function App() {

  const { currentUser } = useAuth()


  return (
    <>


      {
        currentUser ?
          <Routes>
            <Route path={"/"} element={<Home />}>
              <Route path={"profile"} element={<Profile />} />
              <Route path={"signin"} element={<SignIn />}></Route>
              <Route path={"signup"} element={<SignUp />}></Route>
            </Route>

            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path={"/*"} element={<Notfound />}></Route>

          </Routes>
          :
          <Routes>

            <Route path={"/"} element={<Home />}>
              <Route path={"signin"} element={<SignIn />}></Route>
              <Route path={"signup"} element={<SignUp />}></Route>
            </Route>

            <Route path={"/*"} element={<Notfound />}></Route>
          </Routes>
      }

    </>
  )
}

export default App