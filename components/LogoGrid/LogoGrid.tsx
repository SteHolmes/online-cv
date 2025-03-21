import Image from 'next/image'
import styles from './LogoGrid.module.scss'

export default function LogoGrid() {
  const rootDirectory = '/logos/'
  
  const logos = [
    {
      src: `${rootDirectory}html.png`,
      label: 'HTML',
    },
    {
      src: `${rootDirectory}css.png`,
      label: 'CSS',
    },
    {
      src: `${rootDirectory}javascript.png`,
      label: 'Javascript',
    },
    {
      src: `${rootDirectory}sass.png`,
      label: 'SASS',
    },
    {
      src: `${rootDirectory}git.png`,
      label: 'Git',
    },
    {
      src: `${rootDirectory}vue-logo.png`,
      label: 'Vue',
    },
    {
      src: `${rootDirectory}nuxt.png`,
      label: 'Nuxt',
    },
    {
      src: `${rootDirectory}react.png`,
      label: 'React',
    },
    {
      src: `${rootDirectory}next.png`,
      label: 'Next',
    },
    {
      src: `${rootDirectory}express.png`,
      label: 'Express',
    }
  ]

  const renderedLogos = logos.map((logo) => {
    return <div key={logo.label}>
      <Image src={logo.src} alt={`${logo.label} logo`} width={100} height={100} />
      <div className="skills__item-name">{logo.label.toUpperCase()}</div>
    </div>
  })

  return (
    <div className={styles.logoGrid}>
      { renderedLogos }
    </div>
  )
}