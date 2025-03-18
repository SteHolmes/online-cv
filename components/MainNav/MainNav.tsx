import Link from 'next/link'
import styles from './MainNav.module.scss'

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <div className={`${styles.panel} ${styles.panelOne}`}>
        <div className={styles.panelInner}>
          <h2 className={styles.panelHeading}>Welcome</h2>
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
            {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>          
          </h2>
          <p className={styles.panelText}>No I haven't been to the Moon (yet), but here you'll find details of my previous employment, past projects and experience.</p>
        </Link>
      </div>
      <div className={`${styles.panel} ${styles.panelThree}`}>
        <Link className={`${styles.panelLink} ${styles.panelInner}`} href="/interests">
          <h2 className={styles.panelHeading}>
            Interests
            {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </h2>
          <p className={styles.panelText}>Hobbies and interests outside of work...</p>
        </Link>
      </div>
    </nav>
  );
}