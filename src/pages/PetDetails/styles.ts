import styled from 'styled-components'

export const Sidebar = styled.div`
  background: ${(props) => props.theme.red};
  width: 6rem;
  height: 100vh;
  padding: 2rem 1rem;
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.darkBlue};
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const Container = styled.div`
  background: ${(props) => props.theme.rose};
  width: 100%;
  padding: 2rem 0 6rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: ${(props) => props.theme.darkBlue};
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  width: 50%;
  border-radius: 1rem;

  background: ${(props) => props.theme.white};
`

export const TextDescription = styled.div`
  padding: 2rem 2.5rem;
  h1 {
    color: ${(props) => props.theme.darkBlue};
    font-weight: bold;
    font-size: 3.375rem;
  }

  span {
    color: ${(props) => props.theme.darkBlue};
    font-size: 1.125rem;
    font-weight: 600;
  }
`

export const Divider = styled.div`
  margin: 2.5rem;
  border: 1px solid rgb(13, 59, 102, 0.1);
`
