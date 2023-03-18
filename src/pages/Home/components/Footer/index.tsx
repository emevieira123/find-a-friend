import {
  CitySelect,
  FilterContainer,
  FooterContainer,
  SearchButton,
  StateSelect,
} from '../../styles'
import SearchIcon from '../../../../assets/icons/search.svg'
import useGetStates from '../../hooks/useGetStates'
import { useState } from 'react'

interface StateType {
  id: number
  sigla: string
}

export function FooterHome() {
  const [sigla, setSigla] = useState('')
  const { data: Estados } = useGetStates()

  console.log(sigla)

  return (
    <FooterContainer>
      <span>
        Encontre o animal de estimação ideal <br />
        para seu estilo de vida!
      </span>

      <FilterContainer>
        <span>Busque um amigo</span>

        <StateSelect name="select">
          {Estados?.map((estado: StateType) => {
            return (
              <option
                key={estado.id}
                onChange={(e: any) => setSigla(e.target.value)}
                value={estado.sigla}
              >
                {estado.sigla}
              </option>
            )
          })}
        </StateSelect>

        <CitySelect name="select">
          <option value="valor1">São Paulo</option>
          <option value="valor2" selected>
            Recife
          </option>
          <option value="valor3">Rio de Janeiro</option>
        </CitySelect>

        <SearchButton>
          <img src={SearchIcon} alt="" />
        </SearchButton>
      </FilterContainer>
    </FooterContainer>
  )
}
