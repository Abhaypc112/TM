import React from 'react'
import Signup from './pages/auth/Signup'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Signin from './pages/auth/Signin'
import AuthProtectRoutes from './routes/AuthProtectRoutes'
import UserProtectRoutes from './routes/UserProtectRoutes'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<AuthProtectRoutes/>}>
          <Route path='/signup' element={<Layout><Signup/></Layout>}/>
          <Route path='/signin' element={<Layout><Signin/></Layout>}/>
        </Route>

        <Route element={<UserProtectRoutes/>}>
          <Route path='/dashboard' element={<Layout><Dashboard/></Layout>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
