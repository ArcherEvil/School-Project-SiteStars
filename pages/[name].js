import { useRouter } from "next/router"
import styles from '../styles/Fruits/Fruits.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import tablestyles from '../styles/Fruits/Table.module.css'


const Fruit = ({ fruit }) => {
  
  const [lang, setLang] = useState(false)
  useEffect(() => {
    Aos.init({duration : 2000})
    const local = localStorage.getItem('lang')

    if (local == 'Portuguese/Português') {
      setLang(false)
    }
    else if (local == 'English') {
      setLang(true)
    }
  }, [])
  
  
  const router = useRouter();
  

  return (
    <main className={styles.main}>
        <Head>
        <title>{fruit.Name} - FruitsFlavours</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {lang ?
      <button onClick={() => {router.push("/#content")}}>Go Back</button>
      :<button onClick={() => {router.push("/#content")}}>Voltar</button>
      }
      <div data-aos='fade-up' className={styles.content}>
        <div className={styles.img}>  
        <Image layout="responsive" src={`/api/imagefetcher?url=${encodeURIComponent(fruit.Url)}`}  width={300} height={300}/>
        </div>
        <div className={styles.name}>
        <p name={fruit.Name}>{fruit.Name}</p>
        </div>
      <p>{fruit.Cientific}</p>
      <h2>{fruit['First Sentence']}</h2>
      {fruit.hasOwnProperty("Nutricional") && 
      <div className={styles.table}>
          {Object.keys(fruit.Nutricional).map((name) => (<table key={name} className={tablestyles.contenttable} >
            <thead>
              <tr>
                <th>{name}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {Object.keys(fruit.Nutricional[name]).map((item) => (<tr key={item} ><td>{item}</td><td>{fruit.Nutricional[name][item]}</td></tr>))}
            </tbody>
          </table>))}
      </div>
      }
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
    fallback: false,
  }
}