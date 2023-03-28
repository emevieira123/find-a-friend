import { URLS } from '@/infra/URLS'
import { Login } from '@/pages/Login'
import { PetDetails } from '@/pages/PetDetails'
import { Register } from '@/pages/Register'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'

export function Router() {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<Home />} />
      <Route path={URLS.MAP} element={<Map />} />
      <Route path={URLS.DETAILS_PET_WEB} element={<PetDetails />} />
      <Route path={URLS.LOGIN} element={<Login />} />
      <Route path={URLS.REGISTER} element={<Register />} />
    </Routes>
  )
}
