import jwtDecode from 'jwt-decode'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { useAlert } from './useAlert'
export const useLogin = () => {
  const navigate = useNavigate()

  const { setUser } = useContext(AuthContext)

  const [loginData, setloginData] = useState({
    userName: '',
    password: ''
  })

  const { userName, password } = loginData

  const dataLogin = e => {
    setloginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const [loading, setLoading] = useState(false)

  const { setalertsData, alertsData } = useAlert()

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8080/api/users/signIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, password })
      })
      const data = await response.json()
      if (!response.ok) {
        setLoading(false)
        setalertsData({ message: data, isActive: true })
        return
      }
      localStorage.setItem('token', data.jwt)
      const decoded = jwtDecode(data.jwt)
      setUser({ id: decoded.id, userName: decoded.userName })
      setLoading(false)
      navigate('/Home')
    } catch (err) {
      setLoading(false)
      setalertsData({ message: err, isActive: true })
    }
  }
  return {
    loginData,
    dataLogin,
    handleSubmit,
    loading,
    alertsData
  }
}
