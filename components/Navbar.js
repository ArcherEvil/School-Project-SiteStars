import styles from '../styles/Navbar/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
    <p id="title">FruitsFlavours</p>
    <div className={styles.Searchbar}>
      <input type='text' placeholder='Search...'/>
      <button>
      <Image src='/searchnav.png' width='40px' height='40px'/>
      </button>
    </div>
</nav>
  )
}

export default Navbar