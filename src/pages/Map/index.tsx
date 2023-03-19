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

export function Map() {
  const [searchParams] = useSearchParams()
  const city = searchParams.get('cidade')
  const { data: Pets } = useGetPets(city!)

  // function handleFilterByPetType() {
  //   // TO DO
  // }

  return (
    <Container>
      <Aside />

      <Content>
        <Header>
          <p>
            Encontrei <span>{Pets?.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect name="size" id="size">
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {Pets?.map((pet: PetType) => {
            return (
              <Card
                key={pet.id}
                path={pet.photo_url}
                type={pet.type}
                name={pet.name}
              />
            )
          })}
        </Display>
      </Content>
    </Container>
  )
}
