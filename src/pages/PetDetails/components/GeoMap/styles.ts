import styled from 'styled-components'
import { MapContainer } from 'react-leaflet'

export const ContainerGeoMap = styled.div`
  margin: 1rem 2.5rem;
  height: 18.5rem;
  background: ${(props) => props.theme.darkBlue};
  border-radius: 2rem;

  display: flex;
  flex-direction: column;

  strong {
    height: 4rem;
    font-size: 1.125rem;
    color: ${(props) => props.theme.yellow};
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const ContainerMap = styled(MapContainer)`
  width: 100%;
  height: 14.5rem;
  border-radius: 2rem;
`
