import React from 'react'
import styles from '../../page.module.css'
import Image from 'next/image'
import Tooltip from '../tooltip'

export default function SquareItem({data}: any) {
  return (
    <>
    <div className={styles.square}>
      <Image alt={data.name} width={60} height={60} src={data.route}/>
    </div>
    <Tooltip item={data}/>
    </>
  )
}
