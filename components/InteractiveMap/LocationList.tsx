import { useState, useEffect } from "react"
import type { Place } from '@/app/api/Place'
import styles from './InteractiveMap.module.scss'

interface LocationListProps {
  defaultList: Place[],
  onPlaceClick: (place: Place) => void  
}

export default function LocationSearch({ defaultList, onPlaceClick }: LocationListProps) {
  const [places, setPlaces] = useState<Place[]>([])

  useEffect(() => {
    setPlaces(defaultList)  
  }, [defaultList])

  const placeListings = places.map((place) => {
    return (
      <li
        className={styles.locationListItem}
        key={place.id}
      >
        <h5>{place.name}</h5>
        <button
          className={styles.listItemButton}
          onClick={() => onPlaceClick(place)}
        >
          View
        </button>
      </li>
    )
  })

  return (
    <div>
      <h4 className={styles.locationListHeading}>Locations</h4>
      <ul className={styles.locationList}>{placeListings}</ul>
    </div>
  )
}
