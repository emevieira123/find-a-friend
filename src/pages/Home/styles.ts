import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.red};
  width: 100%;
  height: 100vh;
  padding: 7.75rem 7rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

export const ContentContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: end;
  justify-content: space-between;

  h1 {
    font-size: 4.5rem;
  }
`

export const FooterContainer = styled.div`
  margin-top: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

export const StateSelect = styled.select`
  background: transparent;
  margin-left: 1rem;
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 1.25rem;
  padding: 19px 14px;

  &:focus {
    outline: none;
  }
`

export const CitySelect = styled.select`
  background: ${(props) => props.theme.darkRed};
  margin-left: 0.5rem;
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 1.25rem;
  padding: 1.18rem 4rem 1.18rem 6.25rem;

  &:focus {
    outline: none;
  }
`

export const SearchButton = styled.button`
  background: ${(props) => props.theme.yellow};
  margin-left: 1.5rem;
  color: ${(props) => props.theme.darkBlue};
  border: none;
  border-radius: 1.25rem;
  padding: 19px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
`
