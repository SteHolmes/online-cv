"use client"

import { InView } from "react-intersection-observer"
import styles from './AnimatedSection.module.scss'

export default function AnimatedSection({ children }: Readonly<{children: React.ReactNode}>) {
  
  return (
    <InView triggerOnce threshold={0.2}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`${styles.fadeInSection} ${inView ? `${styles.isVisible}` : ''}`}
        >
          {children}
        </div>
      )}
    </InView>
  )
}
