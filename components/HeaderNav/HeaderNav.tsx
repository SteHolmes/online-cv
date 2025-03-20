import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from './HeaderNav.module.scss'

export default function MainHeader() {
  return (
    <header className={styles.appHeader}>
      <nav className={styles.navBlock}>
        <div className={styles.heading}>
          <div className={styles.colourBanner}>
            <div className={styles.colourBannerBorder}></div>
          </div>
          <Link className={styles.navLink} href="/">
            <div className={styles.homeLink}>
              <div className={styles.headingText}>
                <div>
                  <span className={styles.highlightedText}>#</span> 
                  STEPHEN_HOLMES 
                </div>
                <span className={styles.headingSubText}>&#123; Front-end Developer &#125;</span>
              </div>
            </div>
          </Link>
        </div>
        <Link className={styles.navLink} href="/contact">
          <FontAwesomeIcon className={styles.navLinkIcon} icon={faEnvelope} />             
          Contact
        </Link>
      </nav>
    </header>
  );
}
