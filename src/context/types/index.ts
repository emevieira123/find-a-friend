/* eslint-disable no-undef */
export interface IUser {
  email?: string
  token?: string
}

export interface IContext {
  user: IUser | null
  authenticated: (email: string, password: string) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: JSX.Element
}
