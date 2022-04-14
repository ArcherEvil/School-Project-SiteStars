import styles from '../styles/Navbar/Navbar.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import pt from '../public/Lang/pt.png'
import uk from '../public/Lang/uk.webp'

const Navbar = () => {
  const router = useRouter();
  const Link = () => {
    router.push('/')
  }

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

  const [Input, setInput] = useState('');
  const Search = () => {
    router.push('/search?name=' + Input.toLowerCase())
  }
  const onKeyUpValue = (event) => {
    if (event.keyCode === 13) {
      router.push('/search?name=' + Input.toLowerCase())
    }
  }

  const Lang = (lang) => {
    if (lang == 'PT') {

      localStorage.setItem('lang', 'Portuguese/Português')
      router.reload(window.location.pathname)
    }
    else if (lang == 'EN') {

      localStorage.setItem('lang', 'English')
      router.reload(window.location.pathname)
    }
  }

  return (
    <nav className={styles.Navbar}>
    <a onClick={() => {Link()}} id="title">FruitsFlavours</a>
    <div className={styles.navcontainer}>
    <div className={styles.Searchbar}>
      <input
      onKeyUp={onKeyUpValue.bind(this)}
      type='search' 
      placeholder='Search...'
      onChange={e => { setInput(e.currentTarget.value); }}
      />
      <button onClick={() => {Search()}}>
      <Image src='/searchnav.png' width='40px' height='40px'/>
      </button>
    </div>
    {lang ? 
      <select onChange={e => {Lang(e.target.value)}}>
        <option>EN</option>
        <option>PT</option>
      </select>
    : <select onChange={e => {Lang(e.target.value)}}>
        <option>PT</option>
        <option>EN</option>
      </select>
      }
    </div>
</nav>
  )
}

export default Navbar