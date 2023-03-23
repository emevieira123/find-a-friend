import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 2.5rem;

  img {
    margin-top: 0.3rem;
  }
`

export const InfoOrgContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.darkBlue};
  }

  span {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  button {
    width: 15rem;
    height: 3.3rem;
    border-radius: 5px;
    border: 0;
    margin-bottom: 0.5rem;
    background: rgb(13, 59, 102, 0.1);
    color: ${(props) => props.theme.darkBlue};
    font-size: 1.125rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`
