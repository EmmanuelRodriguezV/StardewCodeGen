'use client'
import React, { useState } from 'react'
import styles from '../../styles/Layout.module.scss'
import Image from 'next/image'
import Tooltip from '../tooltip'

export default function SquareItem({data}: any) {
  const [showTooltip, setShowTooltip] = useState(false)
  const handleImageError = () =>{
   return <Image alt="Default Image" width={60} height={60} src="/imagesTest/1.webp" />;
  }
  const IMAGE_PATH = '/assets';
  return (
    <>
    {
     data?.srcImageName&& <div className={styles.square} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} >
     <Image alt={data?.itemTitle} width={60} height={60} src={`${IMAGE_PATH}/${data.srcImageName}`} onError={handleImageError} />
    </div>
    }
    {showTooltip && data?.srcImageName && <Tooltip item={data}/>}
    
    </>
  )
}
