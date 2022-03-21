import { useRouter } from "next/router"
import styles from '../styles/Fruits/Fruits.module.css'

const Fruit = ({ fruit }) => {
  console.log(fruit)
   
  return (
    <main className={styles.main}>
      <div className={styles.content}>

      </div>
    </main>
  )
}

export default Fruit

export const getStaticProps = async (context) => {
  const res = await fetch('https://fruits-flavours-api.herokuapp.com')
  const data = await res.json()
  let fruit = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].Name == context.params.name) {
      fruit = data[i]
    }
  }

  return {
    props: {
        fruit
    },
    revalidate : 60
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://fruits-flavours-api.herokuapp.com')
  const data = await res.json()
  const fruits = data.map(fruit => fruit.Name)
  const paths = fruits.map(fruit => ({params: {name: fruit.toString()}}))
  return {
    paths,
    fallback: false
  }
}