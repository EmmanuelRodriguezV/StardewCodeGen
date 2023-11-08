'use client'
import React, { useState } from 'react'
import styles from '../../styles/Layout.module.scss'
import Image from 'next/image'
import Tooltip from '../tooltip'

export default function SquareItem({data}: any) {
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <>
    <div className={styles.square} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} >
      <Image alt={data.name} width={60} height={60} src={data.route}/>
    </div>
    {showTooltip && <Tooltip item={data}/>}
    </>
  )
}
