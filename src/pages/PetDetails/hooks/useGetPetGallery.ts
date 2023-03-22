import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

async function getPetGallery(petId: string) {
  if (!petId) return
  return await api
    .get(URLS.PET_GALLERY.replace(':pet_id', petId))
    .then((resp) => resp.data.pet_gallery)
}

export function useGetPetGallery(petId: string) {
  const resultQuery = useQuery(
    [URLS.PET_GALLERY.replace(':pet_id', petId)],
    () => getPetGallery(petId),
    {
      onError: (err) => {
        console.log(err)
        toast.error('Pet não encontrado')
      },
    },
  )

  return resultQuery
}
