'use client'
import styles from './styles/Layout.module.scss'
import SquareItem from './components/squareItem'
import data from '../../generateCodes/StardewItemCodes.json';
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const [line, setLine] = useState(true)
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <div className={styles.toogleBtn} onClick={()=> setLine(!line)}>
          <div className={styles.baseBtn}>
            { line ? <Image alt='list' src={'/icons/line3.svg'} width={20} height={20} /> :
            <Image alt='square' src={'/icons/grid.svg'} width={30} height={30} />
            }
          </div>
        </div>
      </div>
      <div className={`${styles.frame} ${styles.fullScreen}`}>
        <div className={`${styles.base} ${styles.fullScreen}`}>
          {
            data.map((item, index) => {
             return <SquareItem key={index} data={item} />
            })
          }
        </div>
      </div>
    </main>
  )
}
