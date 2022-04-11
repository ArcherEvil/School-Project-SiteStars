import Image from 'next/image';
import styles from '../styles/Home/Home.module.css';
import scard from '../styles/Home/Card.module.css';
import { useRouter} from 'next/router';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import stp from '../public/st.png';
import logo from '../public/logo.png';

export default function Home({ data }) {

  console.log(data)
  useEffect(() => {
    Aos.init({duration : 2000})
  }, [])
  
  return (
      <main>
      <div data-aos="flip-right" data-aos-duration="1000"
      className={styles.mainlogo}>
        <div className={styles.logo}>
        <Image src={logo} layout="responsive"/>
        </div>
        <p>FruitsFlavours</p>
      </div>
      <div className={styles.presentation}>
        <h2 data-aos='slide-up' >As frutas constituem uma parte fundamental numa alimentação saudável e devem ser consumidas todos os dias. São ricas em vitaminas, minerais, diferentes fibras alimentares, compostos protetores e antioxidantes.</h2>
        <div data-aos="fade-up" data-aos-duration="1000"  className={styles.Stp}> 
          <div className={styles.stimg}>
            <Image src={stp} />
          </div>
          <h4>São Tomé e Príncipe é um verdadeiro paraíso onde encontramos as mais variadas e deliciosas frutas ricas em nutrientes e todos os compostos importantes que torna a nossa vida mais saudável e a nossa dieta alimentar mais equilibrada e interessante.</h4>
        </div>
        <h3 data-aos='slide-up' data-aos-duration="1500">Neste site encontrarás alguns dos frutos mais conhecidos em São Tomé e Príncipe, bem como informações relevantes relacionadas a cada um deles.</h3>
      </div>
      <div id='content'  data-aos='fade-up' className={styles.content}>
        <div   className={styles.ctitle}>
          <p>Enjoy our Menu!</p>
        </div>
        <div  className={styles.cardlist}>
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

