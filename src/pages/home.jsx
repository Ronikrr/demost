import React from 'react'
import Banner from '../components/banner'
import Whychoose from '../components/whychoose'
import Aboutsectoion from '../components/aboutsectoion'
import HomeVision from '../components/extra/homevision'

const Home = () => {
  return (
    <div>
      <Banner />
      <Aboutsectoion />
      <Whychoose />
      <HomeVision />
    </div>
  )
}

export default Home