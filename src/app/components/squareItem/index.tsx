'use client'
import React, { useState ,useRef} from 'react'
import styles from '../../styles/Layout.module.scss'
import Image from 'next/image'
import Tooltip from '../tooltip'

export default function SquareItem({data}: any) {
  // onMouseLeave={() => setShowTooltip(false)} > 
  const [showTooltip, setShowTooltip] = useState(false)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const cardRef = useRef(null)
  const handleImageError = () =>{
   return <Image alt="Default Image" width={60} height={60} src="/imagesTest/1.webp" />;
  }
  const IMAGE_PATH = '/assets';
  
  return (
    <> {
     data?.srcImageName && <div
     ref = {cardRef}
     className={styles.square}
     onMouseEnter={() => {
      const elementCard = cardRef.current
      let rectCard:DOMRect
      if(elementCard){
        rectCard = cardRef.current.getBoundingClientRect()
        setTop(rectCard.bottom)
        setLeft(rectCard.right)
      }
       setShowTooltip(true);
     }}
     onMouseLeave={() => {
       setShowTooltip(false);
     }}
   >
    
     <Image alt={data?.itemTitle} width={60} height={60} src={`${IMAGE_PATH}/${data.srcImageName}`} onError={handleImageError} />
    </div>
    }
     {showTooltip && data?.srcImageName && <Tooltip key={data.code} item={data} top={top} left={left}/>}
    
    </>
  )
}
