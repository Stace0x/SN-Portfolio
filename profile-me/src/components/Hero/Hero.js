import styles from './Hero.module.css'

export default function Hero () {
  return (
    <div className={styles.mainArea}>
      <div className={styles.title}>Hi, Stacey here</div>
      <div className={styles.circles}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

