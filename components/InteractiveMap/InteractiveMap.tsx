import dynamic from 'next/dynamic'

import { useState } from 'react'
import type { Place } from '@/app/api/Place'
import LocationList from './LocationList'
import styles from './InteractiveMap.module.scss'

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function MapPage() {
  const [place, setPlace] = useState<Place | null>(null)

  const defaultPlaceList = [
    {
      id: 123,
      name: 'Glencoe',
      lat: 56.6823843,
      long: -5.1025012
    },
    {
      id: 234,
      name: 'Isle of Skye',
      lat: 57.6464172,
      long: -6.3148327
    },
    {
      id: 345,
      name: 'Giant\'s Causeway',
      lat: 55.2301062,
      long: -6.5227638
    },
    {
      id: 456,
      name: 'Brecon Beacons',
      lat: 51.8840603,
      long: -3.4467424
    },
    {
      id: 567,
      name: 'The Jurassic Coast',
      lat: 50.6212706,
      long: -2.2792745
    },
  ]

  return (
    <div className={styles.interactiveMap}>
      <div className={styles.listCol}>
        <LocationList defaultList={defaultPlaceList} onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className={styles.mapCol}>
        <Map place={place} />
      </div>
    </div>
  )
}
