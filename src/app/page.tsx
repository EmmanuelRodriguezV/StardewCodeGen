'use client'
import styles from './styles/Layout.module.scss'
import SquareItem from './components/squareItem'
import data from '../../generateCodes/StardewItemCodes.json';
import Image from 'next/image';
import { useState,useEffect, KeyboardEvent,ChangeEvent } from 'react';
export default function Home() {
  type IdataStar = {
    code:string,
    itemTitle:string,
    description:string,
    srcImageName?:string,
  }
  const [line, setLine] = useState(true)
  const [dataCopy,setData] = useState<Array<IdataStar>>([]); 
  const searchItem = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = e.currentTarget.value.toLowerCase();
    const regex = new RegExp(searchTerm, 'i'); // 'i' flag for case-insensitive matching

    setData(data.filter(d => regex.test(d.itemTitle) && d.srcImageName));
  }; 
  const resetItems = (e:KeyboardEvent<HTMLInputElement>):void =>{
    if(e.currentTarget.value ==='')
    setData(data);
  }
  useEffect(()=>{
    setData(data )
  },[])
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <input onKeyUp={resetItems} onKeyDown={searchItem} type='text' placeholder='search'></input>
        {(buttonToggle())}
      </div>
      <div className={`${styles.frame} ${styles.fullScreen}`}>
        <div className={`${styles.base} ${styles.fullScreen}`}>
          {
            dataCopy.map((item, index) => {
             return <SquareItem key={index} data={item} />
            })
          }
        </div>
      </div>
    </main>
  )

  function buttonToggle() {
    return <div className={styles.toogleBtn} onClick={() => setLine(!line)}>
      <div className={styles.baseBtn}>
        {line ? <Image alt='list' src={'/icons/line3.svg'} width={20} height={20} /> :
          <Image alt='square' src={'/icons/grid.svg'} width={30} height={30} />}
      </div>
    </div>;
  }
}
