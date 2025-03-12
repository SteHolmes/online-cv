"use client"

import { useState } from 'react'
import { PropsWithChildren } from 'react'
import styles from './Accordion.module.scss'

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
      <svg className={styles.panelIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
      
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