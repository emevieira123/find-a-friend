import { PrivateRouter, SessionStarted } from '@/infra/PrivateRouter'
import { URLS } from '@/infra/URLS'
import { Dashboard } from '@/pages/Dashboard'
import { Login } from '@/pages/Login'
import { PetDetails } from '@/pages/PetDetails'
import { PetRegister } from '@/pages/PetResgister'
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
      <Route
        path={URLS.LOGIN}
        element={
          <SessionStarted>
            <Login />
          </SessionStarted>
        }
      />
      <Route
        path={URLS.REGISTER}
        element={
          <SessionStarted>
            <Register />
          </SessionStarted>
        }
      />
      <Route
        path={URLS.DASHBOARD}
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />
      <Route
        path={URLS.PET_REGISTER}
        element={
          <PrivateRouter>
            <PetRegister />
          </PrivateRouter>
        }
      />
    </Routes>
  )
}
