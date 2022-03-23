import React from 'react'
import Footer from './footers/footer'
import Navbars from './navbars/navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbars />
            <div style={{minHeight: '50vh'}}>
                {children}
            </div>
        <Footer />
    </>
  )
}

export default Layout