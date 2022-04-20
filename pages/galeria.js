import styles from '../styles/Galeria/galeria.module.css'
import Image from 'next/image'
import { useRouter } from "next/router"
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Images from '../components/Images'

const galeria = () => {
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

  return (
    <main className={styles.main}>
    <Head>
    {lang ?
        <title>Image Gallery - FruitsFlavours</title>
        :<title>Galeria de Imagens - FruitsFlavours</title>
        }
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {lang ? 
    <>
    <h1 data-aos='fade-down'>Image Gallery</h1>
    <h2 data-aos='fade-down'>A collection of all our authority photographs of the fruits featured on the site.</h2>
    </>
    :<>
    <h1 data-aos='fade-down'>Galeria de Imagens</h1>
    <h2 data-aos='fade-down'>Uma coleção de todas as fotografias de nossa autoridade, das frutas apresentadas no site.</h2>
    </>}
    <div className={styles.imageshower}>
        {Object.entries(Images).map(image => <Imageshow name={image[0]} image={image[1]}/>)}
    </div>
    </main>
  )
}

import React from 'react'

export const Imageshow = ({name, image}) => {
  console.log(image)
  return (
    <div>
    <p>{name}</p>
    {image.map(item => <img src={item.src}/>)}
    </div>
  )
}


export default galeria