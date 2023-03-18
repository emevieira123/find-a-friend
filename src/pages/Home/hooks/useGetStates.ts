import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { useQuery } from 'react-query'

function getStates() {
  return api.get(URLS.LISTA_ESTADOS).then((resp) => resp.data.states)
}

export default function useGetStates() {
  const resultQuery = useQuery([URLS.LISTA_ESTADOS], getStates, {
    onError: (err) => {
      console.log(err)
    },
  })

  return resultQuery
}
