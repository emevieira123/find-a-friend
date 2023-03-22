import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

async function getPetDetails(petId: string) {
  if (!petId) return
  return await api
    .get(URLS.PET_DETAILS.replace(':pet_id', petId))
    .then((resp) => resp.data.pet)
}

export function useGetPetDetails(petId: string) {
  const resultQuery = useQuery(
    [URLS.PET_DETAILS.replace(':pet_id', petId)],
    () => getPetDetails(petId),
    {
      onError: (err) => {
        console.log(err)
        toast.error('Pet não encontrado')
      },
    },
  )

  return resultQuery
}
