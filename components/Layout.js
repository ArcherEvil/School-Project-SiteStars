import Navbar from "./Navbar"
import Meta from "./Meta"
import {Router} from 'next/router'
import { useState } from 'react';
import Loader from './Loading'

const Layout = ({ children }) => {
  
  const [Loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    console.log('router is changing')
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    console.log('router Completed')
    setLoading(false)
  })

  return (
    <>
    <Meta/>
      <Navbar/>
      {Loading && <Loader />}
      {children}
    </>
  )
}

export default Layout