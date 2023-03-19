import { FilterContainer, FooterContainer, SearchButton } from '../../styles'
import SearchIcon from '../../../../assets/icons/search.svg'
import useGetStates from '../../hooks/useGetStates'
import { useState } from 'react'
import useGetCitys from '../../hooks/useGetCitys'
import { Select } from '@/components/Select'

interface StateType {
  sigla: string
}

interface CitysType {
  code: string
  name: string
}

export function FooterHome() {
  const [stateSelected, setStateSelected] = useState('')
  const [citySelected, setCitySelected] = useState('')
  const { data: Estados, isLoading: EstadosLoading } = useGetStates()
  const { data: Cidades, isLoading } = useGetCitys(stateSelected)

  const EstadosData = Estados?.map((estado: StateType) => ({
    label: estado.sigla,
    value: estado.sigla,
  }))

  const CidadesData = Cidades?.map((cidade: CitysType) => ({
    label: cidade?.name,
    value: cidade?.name,
  }))

  function handleChangeState(e: any) {
    setStateSelected(e.target.value)
    console.log(e.target.value)
  }

  function handleChangeCity(e: any) {
    setCitySelected(e.target.value)
  }

  console.log(citySelected)

  return (
    <FooterContainer>
      <span>
        Encontre o animal de estimação ideal <br />
        para seu estilo de vida!
      </span>

      <FilterContainer>
        <span>Busque um amigo</span>

        {!EstadosLoading && (
          <Select
            name="UF"
            label=""
            options={EstadosData}
            onChange={handleChangeState}
          ></Select>
        )}

        {!isLoading && (
          <Select
            name="Cidades"
            label=""
            options={CidadesData}
            onChange={handleChangeCity}
          ></Select>
        )}

        <SearchButton>
          <img src={SearchIcon} alt="" />
        </SearchButton>
      </FilterContainer>
    </FooterContainer>
  )
}
