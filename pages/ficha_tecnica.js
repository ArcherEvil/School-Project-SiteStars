import styles from '../styles/ficha_tecnica/ficha_tecnica.module.css'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos';
import Image from 'next/image'
import Luis from '../public/luis.png'
import Reiginaldo from '../public/reiginalda.png'
import Leonardo from '../public/leonarda.png'


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
        <h4>Alunos Responsaveis</h4>
        <div className={styles.participantes}>
        <div>
          <div>  
            <Image src={'/luis.png'} width={300} height={300}/>
          </div>
            <h5>Luis Viegas</h5>
          </div>
          <div>
            <div>
            <Image src={'/reiginalda.png'} width={300} height={300}/>
            </div>
            <h5>Reiginaldo D'Alva</h5>
          </div>
          <div>
            <div>
            <Image src={'/leonarda.png'} width={300} height={300}/>
            </div>
            <h5>Leonardo Dias</h5>
          </div>
        </div>
        <div className={styles.text}>
        <Textanswer title={'Agrupamento de escolas:'} text={'Escola Portuguesa'}/>
        <Textanswer title={'Identificação da Escola:'} text={'Escola Portuguesa de São Tomé e Príncipe'}/>
        <Textanswer title={'Nome da Equipa:'} text={'Flavours'}/>
        <Textanswer title={'Link do Website:'} text={'https://www.fruitsflavourstp.pt'}/>
        <Textanswer title={'Professor responsável:'} text={'Pedro Lima'}/>
        </div>
    </main>
  )
}

const Textanswer = ({title, text}) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h2>
        {text}
      </h2>
    </div>

  )
}
export default Ficha_tecnica