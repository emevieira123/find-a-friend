import { Marker, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'

import { ContainerMap } from './styles'

import LocationMap from '../../../../assets/icons/IconLocationMap.svg'

const MAP_API_KEY = import.meta.env.VITE_GEO_MAP_API_KEY
const USER_ID = import.meta.env.VITE_GEO_MAP_USER_ID
const MAP_STYLE = import.meta.env.VITE_GEO_MAP_STYLE

function CustomTileLayer() {
  return MAP_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${USER_ID}/${MAP_STYLE}/tiles/{z}/{x}/{y}?access_token=${MAP_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="">OpenStreetMap</a> contributors'
      url={`https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?&apiKey=b03a45222f3c4983b87d57a8eb5d2ae3`}
    />
  )
}

const IconLocationMap = Leaflet.icon({
  iconUrl: LocationMap,
  iconSize: [48, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

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
      <CustomTileLayer />
      <Marker icon={IconLocationMap} position={[latitude, longitude]} />
    </ContainerMap>
  )
}
