import { useRouter } from "next/router"
import styles from '../styles/Fruits/Fruits.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect } from 'react'
import Head from 'next/head'

const Fruit = ({ fruit }) => {
  console.log(fruit)
  useEffect(() => {
    Aos.init({duration : 1000})
  }, [])
  return (
    <main className={styles.main}>
        <Head>
        <title>{fruit.Name} - FruitsFlavours</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div data-aos='fade-up' className={styles.content}>
        <div className={styles.img}>  
        <Image layout="responsive" src={`/api/imagefetcher?url=${encodeURIComponent(fruit.Url)}`}  width={300} height={300}/>
        </div>
        <div className={styles.name}>
        <p name={fruit.Name}>{fruit.Name}</p>
        </div>
      <p>{fruit.Cientific}</p>
      <h6>{fruit.Description}</h6>
      </div>
    </main>
  )
}

export default Fruit

export const getStaticProps = async (context) => {
  const res = await fetch('https://fruits-flavours-api.herokuapp.com')
  const data = await res.json()
  let fruit = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].Name == context.params.name) {
      fruit = data[i]
    }
  }

  return {
    props: {
        fruit
    },
    revalidate : 60
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://fruits-flavours-api.herokuapp.com')
  const data = await res.json()
  const fruits = data.map(fruit => fruit.Name)
  const paths = fruits.map(fruit => ({params: {name: fruit.toString()}}))
  return {
    paths,
    fallback: false
  }
}