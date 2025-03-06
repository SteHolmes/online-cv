import { useState, useEffect } from "react"
import type { Place } from '@/app/api/Place'
// import { searchMap } from "@/app/api"
import styles from './InteractiveMap.module.scss'

interface LocationListProps {
  defaultList: Place[],
  onPlaceClick: (place: Place) => void  
}

export default function LocationSearch({ defaultList, onPlaceClick }: LocationListProps) {
  //const [term, setTerm] = useState("")
  const [places, setPlaces] = useState<Place[]>([])

  useEffect(() => {
    setPlaces(defaultList)  
  }, [defaultList])

  // const handleSubmit = async (event) => {
  //   event.preventDefault()

  //   const results = await searchMap(term)

  //   setPlaces(results)
  // }

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
      {/* <form className="mb-4" onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>
      </form> */}
      <h4 className={styles.locationListHeading}>Locations</h4>
      <ul className={styles.locationList}>{placeListings}</ul>
    </div>
  )
}
