import React from 'react'
import Banner from '../components/banner'
import Whychoose from '../components/whychoose'
import Aboutsectoion from '../components/aboutsectoion'
import HomeVision from '../components/extra/homevision'
import Contactbutton from '../components/extra/contactbutton'
import Exportservice from '../components/exportservice'

const Home = () => {
  return (
    <div>
      <Banner />
      <Aboutsectoion />
      <Whychoose /> 
      <Exportservice />
      {/* <HomeVision /> */}
      {/* <Contactbutton /> */}
    </div>
  )
}

export default Home