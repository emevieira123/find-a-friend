import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { toast } from 'react-toastify'
import { FormRegisterData } from '../types'

export default async function registerOrganization(value: FormRegisterData) {
  return await api
    .post(URLS.REGISTER_ORGANIZATION, value)
    .then((response) => {
      console.log(response)
      toast.success('Cadastro realizado com sucesso')
    })
    .catch((error) => {
      console.log(error)
      toast.error('Erro verifique se as informações estão corretas')
    })
}
