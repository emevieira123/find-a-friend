/* eslint-disable no-undef */
import { Header, HeaderSelect, SelectWrapper } from '../../styles'
import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import { PetType } from '../../types'

interface HeaderProps {
  searchType: string
  filter: any
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
  dataSources: PetType[]
}

export function HeaderListPets({
  searchType,
  filter,
  dataSources,
  onChange,
}: HeaderProps) {
  return (
    <Header>
      <p>
        Encontrei{' '}
        <span>{searchType ? filter?.length : dataSources?.length} amigos</span>{' '}
        na sua cidade
      </p>
      <SelectWrapper>
        <HeaderSelect name="size" id="size" onChange={onChange}>
          <option value="">Gatos e Cachorros</option>
          <option value="cat">Gatos</option>
          <option value="dog">Cachorros</option>
        </HeaderSelect>
        <img src={chevron} alt="" />
      </SelectWrapper>
    </Header>
  )
}
