import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  if (!user) {
    return <Navigate to='/SignIn' />
  }
  return children || <Outlet />
}
