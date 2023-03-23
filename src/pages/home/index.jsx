import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const navigateSignIn = () => {
    navigate('/SignIn')
  }
  return (
    <div className='flex'>
      <button
        className='bg-green-400 rounded-md border border-black py-2 px-2 hover:bg-darkerGreen'
        onClick={navigateSignIn}>
        Sign In
      </button>
      <button className='bg-green-400 rounded-md border py-2 px-2 border-black hover:bg-darkerGreen'>
        Sing Up
      </button>
      <div>{user ? <p>Hello {user.userName}</p> : <h1>Hola mundo</h1>}</div>
    </div>
  )
}
