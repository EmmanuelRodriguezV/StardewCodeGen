import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image src='/logo.png' alt='Stardew Valley Codes' width={255} height={143}/>
      </div>
      <div className={styles.frame}>
        <div className={styles.base}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
      </div>
    </main>
  )
}
