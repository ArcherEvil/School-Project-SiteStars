import styles from '../styles/Galeria/galeria.module.css'
import Image from 'next/image'
import { useRouter } from "next/router"
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Images from '../components/Images'
import CloseIcon from '@mui/icons-material/Close';

const Galeria = () => {
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


  const names = {
    en : ['Banana', 'Eddoes', 'Cocoa', 'Carambola', 'Breadfruit', 'Jackfruit', 'Lemon', 'Safou', 'Papaya', 'Orange', 'Soursop', 'Ambarella'],
    pt : ['Banana Pão', 'Batata Doce', 'Cacau', 'Carambola', 'Fruta Pão', 'Jaca', 'Limão', 'Safú', 'Mamão', 'Laranja', 'Sape-Sape', 'Cajamanga']
    
  }
  console.log(Object.entries(Images))

  const range = Array.from({length: names.pt.length}, (x, i) => i);
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
    {lang ? 
        <>
        {range.map(index => <ImageSlider ID={index} key={names.en[index]} name={names.en[index]} img={Object.entries(Images)[index][1]}/>)}
        </>
        :<>
        {range.map(index => <ImageSlider ID={index} key={names.pt[index]} name={names.pt[index]} img={Object.entries(Images)[index][1]}/>)}
        </>
        }
    </div>
    </main>
  )
}


const ImageSlider = ({name, img, ID}) => {

  const numberimg = img.length
  console.log(numberimg)
  const oneimg = false

  if (numberimg == 1) {
    oneimg = true
  }

  const [TempImg, setTempImg] = useState()
  const [Model, setModel] = useState(false)
  const [Sizes, setSizes] = useState()
  
  
  const imgshower = (imgsrc, sizes) => {
    setTempImg(imgsrc)
    setModel(true)
    setSizes(sizes)

  }

  return (
    <div>
    {Model &&
      <div img={TempImg} className={styles.imgshowercontainer}>
      <div className={styles.imgshoweropen}>
      <CloseIcon onClick={() => setModel(!Model)}/>
        <Image layout="responsive" src={TempImg}  width={Sizes[0]} height={Sizes[1]}/>
      </div>
      </div>
      }
      <p>{name}</p>
      {oneimg ?
      <div className={styles.imagecontainerone}>
        {img.map(item => <div id={ID} key={name} number={numberimg} className={styles.image}><Image onClick={() => imgshower(item.src, [item.width, item.height])} src={item.src} width={item.width} height={item.height}/></div>)}
      </div>
      :<div className={styles.imagecontainer}>
        {img.map(item => <div id={ID} key={name} number={numberimg} className={styles.image}><Image onClick={() => imgshower(item.src, [item.width, item.height])} src={item.src} width={item.width} height={item.height}/></div>)}
      </div>
      }
    </div>
  )
}

export default Galeria