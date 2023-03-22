import styled from 'styled-components'

export const ContainerInfoPet = styled.div`
  padding: 2rem 2.5rem;
  width: 100%;

  display: flex;
  gap: 1rem;
`

export const CardPetInfo = styled.div`
  padding: 1.625rem 2rem;
  width: 100%;
  border: 2px solid rgb(13, 59, 102, 0.1);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  i,
  strong {
    color: ${(props) => props.theme.darkBlue};
  }

  strong {
    font-size: 1.125rem;
  }
`
