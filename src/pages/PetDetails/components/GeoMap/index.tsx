import { useGetCoordinates } from '../../hooks/useGetCoordinates'
import { Marker, TileLayer } from 'react-leaflet'
import { ButtonGoogleMaps, ContainerGeoMap, ContainerMap } from './styles'

import Leaflet from 'leaflet'

import LocationMap from '../../../../assets/icons/IconLocationMap.svg'

interface GeoMapProps {
  cep: string
}

const IconLocationMap = Leaflet.icon({
  iconUrl: LocationMap,
  iconSize: [48, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

export function GeoMap({ cep }: GeoMapProps) {
  const { data: coordinates, isLoading: loadingCoordinates } =
    useGetCoordinates(cep)

  return (
    <ContainerGeoMap>
      {!loadingCoordinates && (
        <ContainerMap
          center={[coordinates?.latitude, coordinates?.longitude]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={IconLocationMap}
            position={[coordinates?.latitude, coordinates?.longitude]}
          >
            {/* <Popup>
              Essa é a localização do <br /> seu novo amiguinho.
            </Popup> */}
          </Marker>
        </ContainerMap>
      )}
      <ButtonGoogleMaps
        href={`https://www.google.com/maps/dir/?api=1&destination=${coordinates?.latitude},${coordinates?.longitude}`}
        target="_blank"
      >
        Ver rotas no google maps
      </ButtonGoogleMaps>
    </ContainerGeoMap>
  )
}
