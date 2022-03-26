import { useRouter } from 'next/router';
import styles from '../styles/Search/Search.module.css'
import scard from '../styles/Home/Card.module.css'
import Head from 'next/head'
import unidecode from 'unidecode'
import Image from 'next/image'
import 'aos/dist/aos.css'
const Search = ({ data }) => {
    const router = useRouter();
    const fruit = router.query.name.toLowerCase()
    let results = []
    for (var i = 0; i < data.length; i++) {
        if (unidecode(data[i].Name.toLowerCase()).includes(fruit) && !results.includes(data[i])) {
            results.push(data[i])
        }
    }


    if (results.length != 0) {
        return (
        <main>
        <Head>
            <title>Search Results for {fruit} - Fruits Flavours</title>
        </Head>
        <div className={styles.content}>
            <div className={styles.ctitle}>    
            <p text={'Search Results for ' + fruit}>Search Results for {fruit}</p>
            </div>
            <div className={styles.cardlist}>
            {results.map((item) => (<Card key={item} name={item.Name} img={item.Url}/>))}
        </div>
        </div>
    </main>
        )
    }
    return (
        <>search</>
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

export default Search