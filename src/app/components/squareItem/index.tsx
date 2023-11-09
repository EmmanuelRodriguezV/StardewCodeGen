'use client'
import React, { useState ,useRef} from 'react'
import styles from '../../styles/Layout.module.scss'
import Image from 'next/image'
import Tooltip from '../tooltip'


export default function SquareItem({data}: any) {
  // onMouseLeave={() => setShowTooltip(false)} > 
  const [showTooltip, setShowTooltip] = useState(false)
  const tooltipRef = useRef(null);
  const handleImageError = () =>{
   return <Image alt="Default Image" width={60} height={60} src="/imagesTest/1.webp" />;
  }
  const IMAGE_PATH = '/assets';
  const handleMouseEnter = () => {
    const element = tooltipRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const tooltip = element.querySelector('.tooltip'); // Adjust the selector as needed
      if (tooltip) {
        // Position the tooltip below the element
        tooltip.style.top = `${rect.bottom}px`;
        tooltip.style.left = `${rect.left}px`;
        setShowTooltip(true);
      }
    }
  };
  return (
    <> {
     data?.srcImageName&& <div
   
     className={styles.square}
     onMouseEnter={() => {
      const element = tooltipRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const tooltip = element.querySelector('.tooltip'); // Adjust the selector as needed
        if (tooltip) {
          // Position the tooltip below the element
          tooltip.style.top = `${rect.bottom}px`;
          tooltip.style.left = `${rect.left}px`;
          setShowTooltip(true);
        }
      }
       setShowTooltip(true);
     }}
     onMouseLeave={() => {
       console.log('Mouse left the square');
       setShowTooltip(false);
     }}
   >
    
     <Image alt={data?.itemTitle} width={60} height={60} src={`${IMAGE_PATH}/${data.srcImageName}`} onError={handleImageError} />
    </div>
    }
     {showTooltip && data?.srcImageName && <Tooltip   ref= {tooltipRef} key={data.code} item={data}/>}
    
    </>
  )
}
