'use client'

import 'leaflet/dist/leaflet.css'
import type { Place } from '@/app/api/Place'
import type { Map as LeafletMap } from 'leaflet'
import { useEffect, useRef } from 'react'
import { icon } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import styles from './InteractiveMap.module.scss'

interface MapProps {
  place: Place | null
}

export default function Map({ place }: MapProps) {
  const mapIcon = icon({
    iconUrl: '/icons/marker.svg',
    iconSize: [35, 35],
  })

  const mapRef = useRef<LeafletMap | null>(null)

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.lat, place.long])
    }
  }, [place])

  return (
    <MapContainer
      ref={mapRef}
      center={[53.32407, -1.91291]}
      zoom={8}
      scrollWheelZoom
      className={styles.mapContainer}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.lat, place.long]} icon={mapIcon} />}
    </MapContainer>
  )
}
