import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { IconLocation } from './IconLocation'
import styles from "../styles/map.module.css";
import translate from '../i18n/translate';

export default function Mapa() {
  return (
    <div className={styles['map-container']} >
      <h2>{translate('mapaTitulo')}</h2>
      <MapContainer className={styles['leaflet-container']} center={{ lat: '36.691526313772265', lng: '-4.444048720020822' }} zoom={17}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={{ lat: '36.691526313772265', lng: '-4.444048720020822' }} icon={ IconLocation } />
      </MapContainer>
    </div>
  )
}
