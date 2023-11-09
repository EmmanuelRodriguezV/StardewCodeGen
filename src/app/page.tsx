import styles from './styles/Layout.module.scss'
import SquareItem from './components/squareItem'
import image from '../../generateCodes/assets/'
import data from '../../generateCodes/StardewItemCodes.json';
export default function Home() {
  return (
    <main className={styles.main}>
      
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
