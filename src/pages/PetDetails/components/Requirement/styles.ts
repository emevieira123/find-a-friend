import styled from 'styled-components'

export const ContainerRequirements = styled.div`
  padding: 0 2.5rem;

  h1 {
    color: ${(props) => props.theme.darkBlue};
    margin-bottom: 1rem;
  }
`

export const ContentRequirements = styled.div`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`

export const InfoRequirements = styled.div`
  border: 1px solid ${(props) => props.theme.red};
  background: ${(props) => props.theme.rose};
  color: ${(props) => props.theme.red};
  height: 3rem;
  border-radius: 0.75rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 1.125rem;
  }
`
