import React from 'react'
import styles from './index.module.scss'

type Props = {}
const index = (props: Props) => {
  return (
    <>

    <div className={styles.container} >
        <div>
            <div className={styles.title}>Stardew </div>
            <div className={`${styles.title} ${styles.subtitle}`}>Valley</div>
        </div>
    </div>
    </>
  )
}

export default index