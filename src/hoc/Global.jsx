import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Global = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>  
    </>
  )
}

export default Global
