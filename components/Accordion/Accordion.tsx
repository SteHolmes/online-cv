'use client'

import { useState } from 'react'
import { PropsWithChildren } from 'react'
import styles from './Accordion.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


type AccordionProps = {
  title: string,
  details?: string,
}

export default function Accordion ({title, details, children}: PropsWithChildren<AccordionProps>) {
  const [showPanel, setShowPanel] = useState(false)

  const togglePanel = () => {
    setShowPanel(!showPanel)
  }

  const accordionOpenClass = () => {
    return showPanel ? 'open' : ''
  }

  return (
    <div className={`${styles.accordionPanel} ${accordionOpenClass}`}>
    <button
      className={styles.panelButton}
      aria-controls="'accordion-content-' + ariaTitle"
      aria-expanded={showPanel}
      id="'accordion-control-' + ariaTitle"
      onClick={togglePanel}>
      <div>
        <h4>{ title }</h4>
        <span>{details}</span>
      </div>
      <FontAwesomeIcon className={styles.panelIcon} icon={faPlus} size="2x" />      
    </button>
    <div
      className={styles.panelContentContainer}
      role="region"
      aria-hidden={!showPanel}
      id="'content-' + ariaTitle"
    >
      <div>
        <div className={styles.panelContent}>
          {children}
        </div>
      </div>
    </div>
  </div>
  )
}