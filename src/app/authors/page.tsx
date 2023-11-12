import Image from 'next/image'
import React from 'react'
import styles from '../../app/styles/Layout.module.scss'


export default function Authors() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <div className={styles.base}>
          <div className={styles.rowAuthors}>
            <div className={styles.square} style={{ width: '180px', height: '180px', margin: '0' }}>
              <Image src='/portraitLilita.png' alt='Stardew Valley Codes' width={170} height={170}/>
            </div>
            <div className={styles.textAuthor}>
              <p>Liliana Gallegos Ruvalcaba</p>
              <p>Frontend Dev</p>
              <p>lily.gallegos@hotmail.com</p>
            </div>
          </div>
          <div className={styles.rowAuthors}>
            <div className={styles.square} style={{ width: '180px', height: '180px', margin: '0' }}>
              <Image src='/portraitEmmita.png' alt='Stardew Valley Codes' width={170} height={170}/>
            </div>
            <div className={styles.textAuthor}>
              <p>Emmanuel Rodriguez Velazquez</p>
              <p>Full Stack Dev</p>
              <p>emmanuel_rodriguez.dev@outlook.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
