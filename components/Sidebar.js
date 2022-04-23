import styles from '../styles/Sidebar/sidebar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import RememberMeIcon from '@mui/icons-material/RememberMe';

const Sidebar = (props) => {
    const [lang, setLang] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const local = localStorage.getItem('lang')
    
        if (local == 'Portuguese/Português') {
          setLang(false)
        }
        else if (local == 'English') {
          setLang(true)
        }
      }, [])

      const Link = (names) => {
        router.push(names)
        
      }

    return (
    <aside className={props.on ?`${styles.sidebar} ${styles.active}` : styles.sidebar}>
        {props.children}
        <span></span>
        <button onClick={() => {Link('/')}}><HomeIcon/>
        {lang ? <p>HomePage</p>
        :<p>Página Inicial</p>}
        </button>
        <button onClick={() => {Link('/galeria')}}><BurstModeIcon/>
        {lang ? <p>Image Gallery</p>
        :<p>Galeria de Imagens</p>}
        </button>
        <button onClick={() => {Link('/ficha_tecnica')}}><RememberMeIcon/>
        {lang ? <p>Credits</p>
        :<p>Ficha Técnica</p>}
        </button>
    </aside>
  )
}

export default Sidebar