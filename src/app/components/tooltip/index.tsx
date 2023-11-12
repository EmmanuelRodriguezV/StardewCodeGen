import React from 'react'
import styles from '../../styles/Layout.module.scss'



export default function Tooltip({item, top, left}: any) {
  return (
    <div className={`${styles.frame} ${styles.toolTip}`} style={{top:top, left: left}}>
      <div className={`${styles.base} ${styles.toolTip}`}>
        {item.itemTitle}
        <br></br>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
