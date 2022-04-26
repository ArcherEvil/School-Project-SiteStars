import { useRouter } from "next/router"
import styles from '../styles/Fruits/Fruits.module.css'
import Image from 'next/image'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import tablestyles from '../styles/Fruits/Table.module.css'
import data from '../data.json'
import CloseIcon from '@mui/icons-material/Close';

const Fruit = () => {
  const router = useRouter();

  const fruitspt = data.pt
  const fruitsen = data.en
  const { asPath } = useRouter()

  const fruit = decodeURI(asPath.substring(1))
  let fruitpt = 'equals'
  for (var i = 0; i < fruitspt.length; i++) {
    if (fruitspt[i].Name == fruit) {
      fruitpt = fruitspt[i]
    }
  }

  let fruiten = 'equals'
  for (var i = 0; i < fruitsen.length; i++) {
    if (fruitspt[i].Name == fruit) {
      fruiten = fruitsen[i]
    }
  }

  let fof = false

  if (fruitpt == 'equals' && fruiten  == 'equals') {
    fof = true
  }

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
  const [TempImg, setTempImg] = useState()
  const [Model, setModel] = useState(false)
  
  const imgshower = (imgsrc) => {
    setTempImg(imgsrc)
    setModel(true)

  }
  const SeeInGalleryButton = ({ID}) => {
    const Link = (Index) => {
      router.push('/galeria')
    }
    return (
      <button className={styles.seeingallery}  onClick={() => {Link(ID)}}>
        {lang ? 'See in Gallery' : 'Ver na Galeria'}
      </button>
    )
  }
  return (
    <>
    {
      fof ?
      <main className={styles.main}>
      <Head>
        {lang ?
        <title>Page do not exist.</title>
        :<title>A página n existe.</title>
        }
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h3>404 error</h3>
      {lang ? 
      <h5>This page do not exists</h5>
      :<h5>A página não existe</h5>
      }

      </main>
    :
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
      {Model &&
      <div img={TempImg} className={styles.imgshowercontainer}>
      <div className={styles.imgshoweropen}>
      <CloseIcon onClick={() => setModel(!Model)}/>
        <Image layout="responsive" src={`/api/imagefetcher?url=${encodeURIComponent(fruiten.Url)}`}  width={700} height={700}/>
      </div>
      </div>
      }
      <div data-aos='fade-up' className={styles.content}>
        <div className={styles.img}>
        <Image onClick={() => imgshower(`/api/imagefetcher?url=${encodeURIComponent(fruiten.Url)}`)} layout="responsive" src={`/api/imagefetcher?url=${encodeURIComponent(fruiten.Url)}`}  width={300} height={300}/>

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
      <SeeInGalleryButton ID={fruiten.ID}/>
      </div>
    </main>
    }
    </>
  )
}



export default Fruit


