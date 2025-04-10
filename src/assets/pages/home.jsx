import React from 'react'
import Veggie from '../../components/veggie'
import Popular from '../../components/popular'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const home = () => {
  return (
    <div>

        <Navbar/>
        <Popular/>
        <Veggie/>
        <Footer/>

      
    </div>
  )
}

export default home
