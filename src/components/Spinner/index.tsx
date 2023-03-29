import styled from 'styled-components'

export function Spinner() {
  return <Spin />
}

const Spin = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  animation: spin 1s linear infinite;
  transition-timing-function: linear;
  border-radius: 9999px;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
