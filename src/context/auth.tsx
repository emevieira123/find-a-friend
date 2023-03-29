import { createContext, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import { LoginRequest, setUserLocalStorage } from './utils'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const userInitialState: IUser = {
    email: '',
    token: '',
  }
  const [user, setUser] = useState<IUser>(userInitialState)

  async function authenticated(email: string, password: string) {
    const response = await LoginRequest(email, password)

    const payload = { token: response?.token, email }

    setUser(payload)
    setUserLocalStorage(payload)
  }

  function logout() {
    setUser(userInitialState)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider value={{ user, authenticated, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
