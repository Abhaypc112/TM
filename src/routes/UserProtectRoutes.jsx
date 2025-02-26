import React from 'react'
import { Outlet } from 'react-router-dom';

const UserProtectRoutes = () => {
    const token = localStorage.getItem('token');
    return token ?<Outlet/> : <Navigate to='/signin'/>
}

export default UserProtectRoutes
