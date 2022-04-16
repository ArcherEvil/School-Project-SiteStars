import { useRouter } from "next/router"
import styles from '../styles/Fruits/Fruits.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import tablestyles from '../styles/Fruits/Table.module.css'


const Fruit = ({ fruitpt, fruiten }) => {
  
  
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
        {lang ?
        <title>{fruiten.Name} - FruitsFlavours</title>
        :<title>{fruitpt.Name} - FruitsFlavours</title>
        }
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {lang ?
      <button onClick={() => {router.push("/#content")}}>Go Back</button>
      :<button onClick={() => {router.push("/#content")}}>Voltar</button>
      }
      <div data-aos='fade-up' className={styles.content}>
        <div className={styles.img}>  
        {lang ?
        <Image layout="responsive" src={`/api/imagefetcher?url=${encodeURIComponent(fruiten.Url)}`}  width={300} height={300}/>
        :<Image layout="responsive" src={`/api/imagefetcher?url=${encodeURIComponent(fruitpt.Url)}`}  width={300} height={300}/>
        }
        </div>
        <div className={styles.name}>
        {lang ? 
        <p name={fruiten.Name}>{fruiten.Name}</p>
        :<p name={fruitpt.Name}>{fruitpt.Name}</p>
        }
        </div>
        {lang ?
      <p>{fruiten.Cientific}</p>
      :<p>{fruitpt.Cientific}</p>
        }
      {lang ?
      <h2>{fruiten['First Sentence']}</h2>
      :<h2>{fruitpt['First Sentence']}</h2>
      }
      {lang ?
      <>
      {fruiten.hasOwnProperty("Nutricional") && 
      <div className={styles.table}>
          {Object.keys(fruiten.Nutricional).map((name) => (<table key={name} className={tablestyles.contenttable} >
            <thead>
              <tr>
                <th>{name}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {Object.keys(fruiten.Nutricional[name]).map((item) => (<tr key={item} ><td>{item}</td><td>{fruiten.Nutricional[name][item]}</td></tr>))}
            </tbody>
          </table>))}
      </div>
      }
      </>
      : 
      <>
      {fruitpt.hasOwnProperty("Nutricional") && 
      <div className={styles.table}>
          {Object.keys(fruitpt.Nutricional).map((name) => (<table key={name} className={tablestyles.contenttable} >
            <thead>
              <tr>
                <th>{name}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {Object.keys(fruitpt.Nutricional[name]).map((item) => (<tr key={item} ><td>{item}</td><td>{fruitpt.Nutricional[name][item]}</td></tr>))}
            </tbody>
          </table>))}
      </div>
      }
      </>
      }
      {lang ?
      <h6>{fruiten.Description}</h6>
      :<h6>{fruitpt.Description}</h6>
      }
      </div>
    </main>
  )
}

export default Fruit

export const getStaticProps = async (context) => {
  const res = await fetch('https://fruits-flavours-api.herokuapp.com')
  const fruits = await res.json()
  
  const fruitspt = fruits.pt
  const fruitsen = fruits.en

  let fruitpt = []
  for (var i = 0; i < fruitspt.length; i++) {
    if (fruitspt[i].Name == context.params.name) {
      fruitpt = fruitspt[i]
    }
  }

  let fruiten = []
  for (var i = 0; i < fruitsen.length; i++) {
    if (fruitspt[i].Name == context.params.name) {
      fruiten = fruitsen[i]
    }
  }

  return {
    props: {
        fruitpt,
        fruiten
    },
    revalidate : 60
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://fruits-flavours-api.herokuapp.com')
  const data = await res.json()
  const fruits = data.pt.map(fruit => fruit.Name)
  const paths = fruits.map(fruit => ({params: {name: fruit.toString()}}))
  return {
    paths,
    fallback: false,
  }
}