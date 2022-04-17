import { useRouter } from 'next/router';
import styles from '../styles/Search/Search.module.css'
import scard from '../styles/Home/Card.module.css'
import Head from 'next/head'
import unidecode from 'unidecode'
import Image from 'next/image'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react';
import data from '../data.json'

const Search = () => {
    const router = useRouter();
    let fruit = router.query.name
    fruit = fruit?.toLowerCase()
    let results = []

    let IDs = []
    for (var i = 0; i < data.pt.length; i++) {
        if (unidecode(data.pt[i].Name.toLowerCase()).includes(fruit) && !IDs.includes(data.pt[i].ID)) {
            IDs.push(data.pt[i].ID)
        }
        else if (data.pt[i].Name.toLowerCase().includes(fruit) && !IDs.includes(data.pt[i].ID)) {
          IDs.push(data.pt[i].ID)
      }
    }
    

    for (var i = 0; i < data.en.length; i++) {
      if (unidecode(data.en[i].Name.toLowerCase()).includes(fruit) && !IDs.includes(data.en[i].ID)) {
        IDs.push(data.en[i].ID)
      }
      else if (data.en[i].Name.toLowerCase().includes(fruit) && !IDs.includes(data.en[i].ID)) {
        IDs.push(data.en[i].ID)
    }
  }

  console.log({
    IDSLIST : IDs
  })
  const resultsen = IDs.map(id => data.en[id])
  const resultspt = IDs.map(id => data.pt[id])



    const [lang, setLang] = useState(false)
  useEffect(() => {
    const local = localStorage.getItem('lang')

    if (local == 'Portuguese/Português') {
      setLang(false)
    }
    else if (local == 'English') {
      setLang(true)
    }
  }, [])



    if (resultspt.length != 0) {
        return (
        <main>
        <Head>
        {lang ? 
            <title>Search Results for {fruit} - Fruits Flavours</title>
            :<title>Resultados da pesquisa para {fruit} - Fruits Flavours</title>
        }
        </Head>
        <div className={styles.content}>
            <div className={styles.ctitle}>   
            {lang ? 
            <p text={'Search Results for ' + fruit}>Search Results for {fruit}</p>
            :<p text={'Resultados da pesquisa para ' + fruit}>Resultados da pesquisa para {fruit}</p>
            } 
            </div>
            <div className={styles.cardlist}>
            {lang ?
            <>
            {resultsen.map((item) => (<Card key={item} name={item.Name} img={item.Url}/>))}
            </>
            :<>
            {resultspt.map((item) => (<Card key={item} name={item.Name} img={item.Url}/>))}
            </>
            }
        </div>
        </div>
    </main>
        )
    }
    return (
        <div className={styles.noresults}>
          <p>Sem Resultados</p>
        </div>
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

export default Search