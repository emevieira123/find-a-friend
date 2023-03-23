import { URLS } from '@/infra/URLS'
import { PetDetails } from '@/pages/PetDetails'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'

export function Router() {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<Home />} />
      <Route path={URLS.MAP} element={<Map />} />
      <Route path={URLS.DETAILS_PET_WEB} element={<PetDetails />} />
    </Routes>
  )
}
