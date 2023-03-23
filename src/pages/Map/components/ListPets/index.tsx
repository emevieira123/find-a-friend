import { Card } from '@/components/Card'
import { URLS } from '@/infra/URLS'
import { useNavigate } from 'react-router-dom'
import { Display } from '../../styles'
import { PetType } from '../../types'

interface ListPetsProps {
  filter: any
  dataSources: PetType[]
  loading?: boolean
  searchType: string
}

export function ListPets({
  filter,
  dataSources,
  loading,
  searchType,
}: ListPetsProps) {
  const navigate = useNavigate()

  function handleDetailsPet(petId?: string) {
    navigate(URLS.DETAILS_PET_WEB.replace(':petId', petId!))
  }

  return (
    <Display>
      {loading ? (
        <span>Carregando...</span>
      ) : searchType ? (
        filter?.map((pet: PetType) => {
          return (
            <Card
              key={pet.id}
              path={pet.photo_url}
              type={pet.type}
              name={pet.name}
              onClick={() => handleDetailsPet(pet.id)}
            />
          )
        })
      ) : (
        dataSources?.map((pet: PetType) => {
          return (
            <Card
              key={pet.id}
              path={pet.photo_url}
              type={pet.type}
              name={pet.name}
              onClick={() => handleDetailsPet(pet.id)}
            />
          )
        })
      )}
    </Display>
  )
}
