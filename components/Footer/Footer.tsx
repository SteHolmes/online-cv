import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.appFooter}>
      <p>Built with Next.JS and &#9749;</p>
      <ul className={styles.linkList}>
        <li>
          <a href="https://github.com/SteHolmes/online-cv" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />          </a>
        </li>
      </ul>
    </footer>
  )
}