import React from 'react'
import mainimg from '../../Media/Mainimg.png'
import './Home.css';

const Home = () => {
  return (
    <main>
      <div className='mainimg'>
      <img src={mainimg}/>
      <p>FruitsFlavours</p>
      </div>
    </main>
  )
}

export default Home