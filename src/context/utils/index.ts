import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { toast } from 'react-toastify'
import { IUser } from '../types'

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('@GCC-FindAFriend', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('@GCC-FindAFriend')

  if (json) {
    return JSON.parse(json)
  }
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post(URLS.LOGIN_REQUEST, {
      email,
      password,
    })

    return request.data
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 404) {
      return toast.error('Credenciais inválidas')
    } else if (error.response.status === 500) {
      return toast.error('Erro: Falha na comunicação com o servidor!')
    }
    // return alert(error.message);
  }
}
