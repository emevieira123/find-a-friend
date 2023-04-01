import { useGetCoordinates } from '../../hooks/useGetCoordinates'
import { MapLocation } from './MapLocation'
import { ButtonGoogleMaps, ContainerGeoMap } from './styles'
interface GeoMapProps {
  cep: string
}

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
