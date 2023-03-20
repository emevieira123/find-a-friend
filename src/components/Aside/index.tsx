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

interface AsideProps {
  setAge: React.Dispatch<React.SetStateAction<string>>
}

export function Aside({ setAge }: AsideProps) {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeSearchFilters(e: any) {
    setAge(e.target.value)
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input type="text" placeholder="Insira uma cidade" />
            <button>
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
            onChange={handleChangeSearchFilters}
            direction="column"
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            direction="column"
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            direction="column"
          />

          <Select
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
            direction="column"
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
