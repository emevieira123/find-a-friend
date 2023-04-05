import { useAuth } from '@/context/hooks/useAuth'
import { URLS } from '@/infra/URLS'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export function Dashboard() {
  const auth = useAuth()
  const navigate = useNavigate()

  function Logout() {
    auth.logout()
    navigate(URLS.LOGIN)
  }

  return (
    <Container>
      <h1>Bem vindo ao FindAFriend</h1>
      <span>você está logado!!!</span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button onClick={() => navigate(URLS.PET_REGISTER)}>
          Cadastrar Pet
        </button>
        <button onClick={Logout}>Logout</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    color: ${(props) => props.theme.darkBlue};
  }

  span {
    color: ${(props) => props.theme.darkBlue};
  }

  button {
    background: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`
