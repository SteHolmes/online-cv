'use client'

import styles from './Button.module.scss'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BackButton = function() {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <button className={styles.buttonBack} onClick={handleBackClick} role="link">
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Back</span>
    </button>
  )
}

export default BackButton