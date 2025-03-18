import styles from './LoadingIcon.module.scss'

export default function LoadingIcon() {

  return (
    <div className={styles.loadingIconContainer}>
      <div className={styles.loadingIcon}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}