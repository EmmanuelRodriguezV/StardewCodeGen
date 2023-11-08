import styles from './styles/Layout.module.scss'
import SquareItem from './components/squareItem'

export default function Home() {
  const itemsData = [
    {
      name: 'Test1',
      route: '/imagesTest/1.webp'
    },
    {
      name: 'Test1',
      route: '/imagesTest/1.webp'
    },
    {
      name: 'Test1',
      route: '/imagesTest/1.webp'
    }
  ]
  return (
    <main className={styles.main}>
      
      <div className={`${styles.frame} ${styles.fullScreen}`}>
        <div className={`${styles.base} ${styles.fullScreen}`}>
          {
            itemsData.map((item, index) => {
             return <SquareItem key={index} data={item} />
            })
          }
        </div>
      </div>
    </main>
  )
}
