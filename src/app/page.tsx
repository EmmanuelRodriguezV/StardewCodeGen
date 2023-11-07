import Image from 'next/image'
import styles from './page.module.css'
import SquareItem from './components/squareItem'

export default function Home() {
  const itemsData = [
    {
      name: 'Test1',
      route: '/imagesTest/1.webp'
    }
  ]
  return (
    <main className={styles.main}>
      
      <div className={styles.frame}>
        <div className={styles.base}>
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
