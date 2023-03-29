import { getUserLocalStorage } from '@/context/utils'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.request.use((config: any) => {
  const user = getUserLocalStorage()
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
})

api.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  if (err.response.status === 401) {
    localStorage.clear()
    window.location.reload()
  }
  return Promise.reject(err)
})
