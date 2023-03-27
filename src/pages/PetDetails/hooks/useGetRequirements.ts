import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

interface TypeRequirement {
  adoption_requirements: {
    id: string
    title: string
  }[]
}

async function getRequirements(petId: string) {
  if (!petId) return
  return await api
    .get<TypeRequirement>(URLS.REQUIREMENTS.replace(':pet_id', petId))
    .then((resp) => resp.data.adoption_requirements)
}

export function useGetRequirements(petId: string) {
  const resultQuery = useQuery(
    [URLS.REQUIREMENTS.replace(':pet_id', petId)],
    () => getRequirements(petId),
    {
      onError: (err) => {
        console.log(err)
        toast.error('Não foi encontrado nenhum requerimento')
      },
    },
  )

  return resultQuery
}
