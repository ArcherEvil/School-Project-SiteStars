import styles from '../styles/ficha_tecnica/ficha_tecnica.module.css'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';

const Ficha_tecnica = () => {
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
        {lang ? 
        <p>Credits</p>
        :<p>Ficha Técnica</p>}
    </main>
  )
}

export default Ficha_tecnica