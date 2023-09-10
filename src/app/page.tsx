import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <div className={styles.base}></div>
      </div>
    </main>
  )
}
