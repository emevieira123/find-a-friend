/* eslint-disable no-undef */
import { Select } from '@/components/Select'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'

import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from './utils/SelectOptions'
import { useState } from 'react'
import useGetStates from '@/pages/Home/hooks/useGetStates'
import useGetCitys from '@/pages/Home/hooks/useGetCitys'
import { CitysType, StateType } from '@/pages/Home/components/Footer'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

interface AsideProps {
  setAge: React.Dispatch<React.SetStateAction<string>>
  setEnergy: React.Dispatch<React.SetStateAction<number | undefined>>
  setSize: React.Dispatch<React.SetStateAction<string>>
  setIndependence: React.Dispatch<React.SetStateAction<string>>
}

export function Aside({
  setAge,
  setEnergy,
  setSize,
  setIndependence,
}: AsideProps) {
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
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            {!EstadosLoading && (
              <Select
                name="UF"
                label=""
                options={EstadosData}
                onChange={(e) => setStateSelected(e.target.value)}
                direction="row"
              ></Select>
            )}

            {!isLoading && (
              <Select
                name="Cidades"
                label=""
                options={CidadesData}
                onChange={(e) => setCitySelected(e.target.value)}
                direction="row"
                disabled={!stateSelected}
              ></Select>
            )}
            <button onClick={handleSearchPets}>
              <img src={search} alt="ícone de lupa" />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            label="Idade"
            options={ageOptions}
            onChange={(e: any) => setAge(e.target.value)}
            direction="column"
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            onChange={(e: any) => setEnergy(e.target.value)}
            direction="column"
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            onChange={(e: any) => setSize(e.target.value)}
            direction="column"
          />

          <Select
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
            onChange={(e: any) => setIndependence(e.target.value)}
            direction="column"
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
