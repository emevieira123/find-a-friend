import { getUserLocalStorage } from '@/context/utils'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_BASE_URL

export const api = axios.create({
  baseURL: API_BASE_URL,
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
  }
  return Promise.reject(err)
})
