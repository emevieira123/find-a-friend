import styled from 'styled-components'

export const ContainerButton = styled.div`
  padding: 0 2.5rem;
  margin-bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.a`
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  width: 100%;
  height: 4rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
