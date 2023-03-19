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
  gap: 1rem;

  span {
    font-size: 1rem;
  }
`

export const SearchButton = styled.button`
  background: ${(props) => props.theme.yellow};
  margin-left: 1.5rem;
  color: ${(props) => props.theme.darkBlue};
  border: none;
  border-radius: 1.25rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
`
