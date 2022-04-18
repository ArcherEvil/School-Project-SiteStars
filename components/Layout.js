import Navbar from "./Navbar"
import Meta from "./Meta"
import {Router} from 'next/router'
import { useEffect, useState } from 'react';
import Loader from './Loading'
import Lang from './Lang'

const Layout = ({ children }) => {
  const [lang, changeLang] = useState(null)
  useEffect(() => {
    const locallang = localStorage.getItem('lang');

    changeLang(locallang)
  }, [])
  const [Loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  console.log(lang)
  if (lang == null || lang == 'null') {
    return (
      <>
        <Lang/>
      </>
    )  
  }
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