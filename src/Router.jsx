import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { SignIn } from './pages/Login/index'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Profile } from './pages/profile'
export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/Home' element={<HomePage />}></Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path='/Prueba'
          element={<div>Hola soy una ruta protegida</div>}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
      </Route>
      <Route path='/SignIn' element={<SignIn />}></Route>
    </Routes>
  )
}
