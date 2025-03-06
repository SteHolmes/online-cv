import "leaflet/dist/leaflet.css"
import type { Place } from '@/app/api/Place'
import type { Map as LeafletMap } from "leaflet"
import { useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import styles from './InteractiveMap.module.scss'

interface MapProps {
  place: Place | null
}

export default function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.lat, place.long])
    }
  }, [place])

  return (
    <MapContainer
      ref={mapRef}
      center={[51.505, -0.09]}
      zoom={8}
      scrollWheelZoom
      className={styles.mapContainer}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.lat, place.long]} />}
    </MapContainer>
  )
}
