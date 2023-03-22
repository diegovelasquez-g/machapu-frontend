import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Route, Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({children}) => {
    const {user, storedToken, isTokenExpired} = useContext(AuthContext)
    if(!user || isTokenExpired(storedToken)){
        return <Navigate to="/SignIn" />
    }
    return children ? children : <Outlet />
}