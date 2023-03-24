import { FilterContainer, FooterContainer, SearchButton } from '../../styles'
import SearchIcon from '../../../../assets/icons/search.svg'
import useGetStates from '../../hooks/useGetStates'
import { useState } from 'react'
import useGetCitys from '../../hooks/useGetCitys'
import { Select } from '@/components/Select'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

export interface StateType {
  sigla: string
}

export interface CitysType {
  code: string
  name: string
}

export function FooterHome() {
  const [stateSelected, setStateSelected] = useState('')
  const [citySelected, setCitySelected] = useState('')
  const { data: Estados, isLoading: EstadosLoading } = useGetStates()
  const { data: Cidades, isLoading } = useGetCitys(stateSelected)

  const navigate = useNavigate()

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
  }

  function handleChangeCity(e: any) {
    setCitySelected(e.target.value)
  }

  function handleSearchPets() {
    if (!citySelected || !stateSelected) {
      toast.warning('É obrigatório selecionar ao menos um estado e uma cidade')
      return
    }
    navigate(`/map?cidade=${citySelected}`)
    setStateSelected('')
    setCitySelected('')
  }

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
            direction="row"
          ></Select>
        )}

        {!isLoading && (
          <Select
            name="Cidades"
            label=""
            options={CidadesData}
            onChange={handleChangeCity}
            direction="row"
            disabled={!stateSelected}
          ></Select>
        )}

        <SearchButton onClick={handleSearchPets}>
          <img src={SearchIcon} alt="" />
        </SearchButton>
      </FilterContainer>
    </FooterContainer>
  )
}
