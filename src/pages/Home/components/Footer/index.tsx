import {
  CitySelect,
  FilterContainer,
  FooterContainer,
  SearchButton,
  StateSelect,
} from '../../styles'
import SearchIcon from '../../../../assets/icons/search.svg'

export function FooterHome() {
  return (
    <FooterContainer>
      <span>
        Encontre o animal de estimação ideal <br />
        para seu estilo de vida!
      </span>

      <FilterContainer>
        <span>Busque um amigo</span>

        <StateSelect name="select">
          <option value="valor1">SP</option>
          <option value="valor2" selected>
            PE
          </option>
          <option value="valor3">RJ</option>
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
