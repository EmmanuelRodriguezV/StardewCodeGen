import React from 'react'
import styles from '../../styles/Layout.module.scss'

export default function Tooltip({item}: any) {
  return (
    <div className={`${styles.frame} ${styles.toolTip}`}>
      <div className={`${styles.base} ${styles.toolTip}`}>
        {item.name}
      </div>
    </div>
  )
}
