import { useEffect } from "react"
import pt from '../public/Lang/pt.png'
import uk from '../public/Lang/uk.webp'
import Image from 'next/image';
import styles from '../styles/Lang/Lang.module.css'
import Router from 'next/router'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Lang = () => {

    useEffect(() => {
        Aos.init({duration : 1000})
      }, [])


    return (
    <main data-aos="fade-up" className={styles.lang}>
    <p>Choose your language.</p>
    <div>
        <Card name='Portuguese/Português' img={pt}/>
        <Card name='English' img={uk}/>
    </div>
    </main>
  )
}

const Card = ({name, img}) => {

    const Link = (lang) => {
        localStorage.setItem('lang', lang)
        Router.reload(window.location.pathname)

    }

    return (
      <button className={styles.card} onClick={() => { Link(name)}}>
        <div className={styles.img}>  
        <Image src={img}  width={600} height={400}/>
        </div>
        <h3>{name}</h3>
      </button>
    )
  }

export default Lang