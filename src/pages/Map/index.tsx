import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'
import useGetPets from './hooks/useGetPets'
import { PetType } from './types'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

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
        <Header>
          <p>
            Encontrei{' '}
            <span>
              {searchType ? filteredType?.length : Pets?.length} amigos
            </span>{' '}
            na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name="size"
              id="size"
              onChange={handleFilterByPetType}
            >
              <option value="">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {isLoading ? (
            <span>Carregando...</span>
          ) : searchType ? (
            filteredType?.map((pet: PetType) => {
              return (
                <Card
                  key={pet.id}
                  path={pet.photo_url}
                  type={pet.type}
                  name={pet.name}
                />
              )
            })
          ) : (
            Pets?.map((pet: PetType) => {
              return (
                <Card
                  key={pet.id}
                  path={pet.photo_url}
                  type={pet.type}
                  name={pet.name}
                />
              )
            })
          )}
        </Display>
      </Content>
    </Container>
  )
}
