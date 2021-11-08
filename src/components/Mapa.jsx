import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Mapa() {
  return (
    <div className="map-container" >
      <h2>¿Donde estamos?</h2>
      <MapContainer center={{ lat: '36.691526313772265', lng: '-4.444048720020822' }} zoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={{ lat: '36.691526313772265', lng: '-4.444048720020822' }} />
      </MapContainer>
    </div>
  )
}
