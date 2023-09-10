import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <div className={styles.base}>
          <div className={styles.square}></div>
          <h1>hola</h1>
        </div>
      </div>
    </main>
  )
}
