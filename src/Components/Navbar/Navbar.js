import React from 'react'
import './Navbar.css';
import searchimg from '../../Media/searchnav.png'

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <p id="title">FruitsFlavours</p>
        <div className='Searchbar'>
          <input type='text' placeholder='Search...'/>
          <button>
          <img src={searchimg}/>
          </button>
        </div>
    </nav>
  )
}

export default Navbar