import Navbar from "./Navbar"
import Meta from "./Meta"

const Layout = ({ children }) => {
  return (
    <>
    <Meta/>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout