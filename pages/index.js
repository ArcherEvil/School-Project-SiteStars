import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home/Home.module.css'

export default function Home() {

  return (
      <main>
      <div className={styles.mainimg}>
        <div className={styles.image}>
          <Image src='/mainimg.png'  width={3668} height={1728}/>
        </div>
      <p>FruitsFlavours</p>
      </div>
      <div className={styles.content}>
        <p>Enjoy our menu!</p>
      </div>
    </main>
  )
}
