import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './MainNav.module.scss'

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <div className={`${styles.panel} ${styles.panelOne}`}>
        <div className={styles.panelInner}>
          <h2 className={`${styles.panelHeading} ${styles.highlightedHeading}`}>Welcome</h2>
          <div className={`${styles.panelText} ${styles.welcomeText}`}>
            <p>Hi, I'm Steve (Stephen if I'm pulling a serious face).</p>
            <p>I'm a <strong>front-end developer</strong> with over 6 years of experience, specialising in <strong>Vue and React</strong>.</p>
            <p>This site is built with <strong>Next JS</strong>. It's part CV and part coding lab (to mess around with anything I don't get to play with in my day job).</p>
          </div>
        </div>
      </div>
      <div className={`${styles.panel} ${styles.panelTwo}`}>
        <Link className={`${styles.panelLink} ${styles.panelInner}`} href="/experience">
          <h2 className={styles.panelHeading}>
            Experience
            <FontAwesomeIcon icon={faArrowRight} />
          </h2>
          <p className={styles.panelText}>No I haven't been to the Moon (yet), but here you'll find details of my previous employment, past projects and experience.</p>
        </Link>
      </div>
      <div className={`${styles.panel} ${styles.panelThree}`}>
        <Link className={`${styles.panelLink} ${styles.panelInner}`} href="/interests">
          <h2 className={styles.panelHeading}>
            Interests
            <FontAwesomeIcon icon={faArrowRight} />
          </h2>
          <p className={styles.panelText}>Hobbies and interests outside of work...</p>
        </Link>
      </div>
    </nav>
  );
}