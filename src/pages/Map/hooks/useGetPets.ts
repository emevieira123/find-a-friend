import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { useQuery } from 'react-query'

function getPets(
  city: string,
  age?: string,
  energy?: number,
  size?: string,
  independence?: string,
) {
  return api
    .get(URLS.LISTA_PETS.replace(':city', city), {
      params: { age, energy, size, independence },
    })
    .then((resp) => resp.data.pets)
}

export default function useGetPets(
  city: string,
  age?: string,
  energy?: number,
  size?: string,
  independence?: string,
) {
  const resultQuery = useQuery(
    [
      URLS.LISTA_PETS.replace(':city', city),
      {
        params: { age, energy, size, independence },
      },
    ],
    () => getPets(city, age, energy, size, independence),
    {
      onError: (err) => {
        console.log(err)
      },
    },
  )

  return resultQuery
}
