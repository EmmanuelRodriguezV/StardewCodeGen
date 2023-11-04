import Image from 'next/image'
import React from 'react'
import styles from '../../app/page.module.css'


export default function Authors() {
  return (
    <main className={styles.main}>
      <div className={styles.frame}>
        <div className={styles.base}>
          <div className={styles.square} style={{ width: '166px', height: '154px'}}>
            <Image src='/portraitLilita.png' alt='Stardew Valley Codes' width={170} height={170}/>
          </div>
          <div className={styles.square} style={{ width: '166px', height: '154px'}}>
            <Image src='/portraitEmmita.png' alt='Stardew Valley Codes' width={170} height={170}/>
          </div>
        </div>
      </div>
    </main>
  )
}
