import { getUserLocalStorage } from '@/context/utils'
import { Dashboard } from '@/pages/Dashboard'
import { Login } from '@/pages/Login'
import { useNavigate } from 'react-router-dom'
import { URLS } from './URLS'

/* eslint-disable no-undef */
export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const userLocalStorage = getUserLocalStorage()
  const navigate = useNavigate()

  if (!userLocalStorage?.token) {
    navigate(URLS.LOGIN)
    return <Login />
  }

  return children
}

export const SessionStarted = ({ children }: { children: JSX.Element }) => {
  const userLocalStorage = getUserLocalStorage()
  const navigate = useNavigate()

  if (userLocalStorage?.token) {
    navigate('/dashboard')
    return <Dashboard />
  }

  return children
}
