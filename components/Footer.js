import styles from '../styles/Footer/Footer.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import 'aos/dist/aos.css'
import Aos from 'aos';


const Footer = () => {

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

  const TechImg = ({img}) => {
    return (
        <Image src={`/api/imagefetcher?url=${encodeURIComponent(img)}`} width={70} height={70}/>
    )
  }

  return (
    <footer className={styles.footer}>
            {lang ?
        <p>App Made With:</p>
        :<p>Site feito em:</p>
    }
        <div>
            <TechImg img={"https://img.icons8.com/color/100/000000/javascript--v2.png"}/>
            <TechImg img={"https://img.icons8.com/color/100/000000/sass-avatar.png"}/>
            <TechImg img={"https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"}/>
            <TechImg img={"https://icon-icons.com/downloadimage.php?id=132160&root=2148/PNG/48/&file=nextjs_icon_132160.png"}/>

        </div>
    </footer>
  )
}

export default Footer