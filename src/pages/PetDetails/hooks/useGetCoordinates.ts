import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

async function getCoordinates(cep: string) {
  if (!cep) return
  return await api
    .get(URLS.COORDINATES.replace(':cep', cep))
    .then((resp) => resp.data.coordinates)
}

export function useGetCoordinates(cep: string) {
  const resultQuery = useQuery(
    [URLS.COORDINATES.replace(':cep', cep)],
    () => getCoordinates(cep),
    {
      onError: (err) => {
        console.log(err)
        toast.error('Não foi possível buscar as coordenadas')
      },
    },
  )

  return resultQuery
}
