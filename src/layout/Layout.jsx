import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <div className="layout">
        <Navbar/>
        <div className="content">{children}</div>
    </div>
  )
}

export default Layout
