import { Navigate, Outlet } from "react-router-dom";


const AuthProtectRoutes = () => {
    const token = localStorage.getItem('token');
    return token ? <Navigate to='/dashboard'/> : <Outlet/>
}

export default AuthProtectRoutes
