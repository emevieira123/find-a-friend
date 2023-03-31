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
  const { data: dataLocation, isLoading: loadingCoordinates } =
    useGetCoordinates(cep)

  return (
    <ContainerGeoMap>
      {!loadingCoordinates && (
        <MapLocation
          latitude={dataLocation?.coordinates.latitude!}
          longitude={dataLocation?.coordinates.longitude!}
        />
      )}
      <ButtonGoogleMaps
        href={`https://www.google.com/maps/dir/?api=1&destination=${dataLocation?.coordinates.latitude},${dataLocation?.coordinates.longitude}`}
        target="_blank"
      >
        Ver rotas no google maps
      </ButtonGoogleMaps>
    </ContainerGeoMap>
  )
}

interface MapLocationProps {
  latitude: number
  longitude: number
}

export function MapLocation({ latitude, longitude }: MapLocationProps) {
  return (
    <ContainerMap
      center={[latitude, longitude!]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="">OpenStreetMap</a> contributors'
        url={`https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?&apiKey=b03a45222f3c4983b87d57a8eb5d2ae3`}
      />
      <Marker icon={IconLocationMap} position={[latitude, longitude]}>
        {/* <Popup>
              Essa é a localização do <br /> seu novo amiguinho.
            </Popup> */}
      </Marker>
    </ContainerMap>
  )
}
