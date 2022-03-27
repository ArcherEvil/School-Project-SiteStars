import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home/Home.module.css'
import scard from '../styles/Home/Card.module.css'
import { useRouter} from 'next/router';
import Aos from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import mainimg from '../public/Mainimg.png'
import introduction1 from '../public/introduction1.jpg.png'

export default function Home({ data }) {

  console.log(data)
  useEffect(() => {
    Aos.init({duration : 2000})
  }, [])
  
  return (
      <main>
      <div className={styles.mainimg}>
        <div className={styles.image}>
          <Image src={mainimg}  width={3668} height={1728}/>
          <p>FruitsFlavours</p>
        </div>
      </div>
      <div className={styles.presentation}>
        <h2 data-aos='slide-up' >As frutas constituem uma parte fundamental numa alimentação saudável e devem ser consumidas todos os dias. São ricas em vitaminas, minerais, diferentes fibras alimentares, compostos protetores e antioxidantes.</h2>
      </div>

      <div data-aos='fade-up' className={styles.content}>
        <div   className={styles.ctitle}>
          <p>Enjoy our Menu!</p>
        </div>
        <div className={styles.cardlist}>
            {data.map((item) => (<Card key={item} name={item.Name} img={item.Url}/>))}
        </div>
      </div>
    </main>
  )
}

const Card = ({name, img}) => {
  const router = useRouter();
  const Link = () => {
    router.push('/' + name)
  }
  return (
    <button className={scard.card} onClick={() => {Link(name)}}>
      <div className={scard.img}>  
      <Image src={`/api/imagefetcher?url=${encodeURIComponent(img)}`}  width={600} height={600}/>
      </div>
      <p>{name}</p>
    </button>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://fruits-flavours-api.herokuapp.com')
  const data = await res.json()


  return {
    props: {
        data
    },
    revalidate : 60
  }
}