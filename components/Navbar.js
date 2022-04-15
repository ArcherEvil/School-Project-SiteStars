import styles from '../styles/Navbar/Navbar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const Link = () => {
    router.push('/')
  }

  const [Input, setInput] = useState('');
  const Search = () => {
    router.push('/search?name=' + Input.toLowerCase())
  }
  const onKeyUpValue = (event) => {
    if (event.keyCode === 13) {
      router.push('/search?name=' + Input.toLowerCase())
    }
  }

  return (
    <nav className={styles.Navbar}>
    <a onClick={() => {Link()}} id="title">FruitsFlavours</a>
    <div className={styles.Searchbar}>
      {lang ? 
      <input
      onKeyUp={onKeyUpValue.bind(this)}
      type='search' 
      placeholder='Search...'
      onChange={e => { setInput(e.currentTarget.value); }}
      />
      :<input
      onKeyUp={onKeyUpValue.bind(this)}
      type='search' 
      placeholder='Procurar...'
      onChange={e => { setInput(e.currentTarget.value); }}
      />
      }
      <button onClick={() => {Search()}}>
      <Image src='/searchnav.png' width='40px' height='40px'/>
      </button>
    </div>
</nav>
  )
}

export default Navbar