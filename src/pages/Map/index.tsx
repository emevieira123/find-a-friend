import { Aside } from '~/Aside'

import { Container, Content } from './styles'
import useGetPets from './hooks/useGetPets'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { ListPets } from './components/ListPets'
import { HeaderListPets } from './components/HeaderListPets'

export function Map() {
  const [searchParams] = useSearchParams()
  const city = searchParams.get('cidade')

  const [searchType, setSearchType] = useState('')
  const [age, setAge] = useState('')
  const [energy, setEnergy] = useState<number>()
  const [size, setSize] = useState('')
  const [independence, setIndependence] = useState('')

  const { data: Pets, isLoading } = useGetPets(
    city!,
    age,
    energy,
    size,
    independence,
  )

  function handleFilterByPetType(e: any) {
    setSearchType(e.target.value)
  }

  const filteredType =
    searchType?.length > 0
      ? Pets?.filter((pet: any) => pet.type.includes(searchType))
      : []

  return (
    <Container>
      <Aside
        setAge={setAge}
        setEnergy={setEnergy}
        setSize={setSize}
        setIndependence={setIndependence}
      />

      <Content>
        <HeaderListPets
          dataSources={Pets}
          filter={filteredType}
          searchType={searchType}
          onChange={handleFilterByPetType}
        />

        <ListPets
          dataSources={Pets}
          filter={filteredType}
          searchType={searchType}
          loading={isLoading}
        />
      </Content>
    </Container>
  )
}
