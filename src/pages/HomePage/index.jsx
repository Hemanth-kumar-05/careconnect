import React from 'react'
import './index.css'

import Header from '../../components/Header/Header'
import Home from '../../components/Home/Home'
import Icons from '../../components/Icons/Icons'
import Services from '../../components/Services'
import About from '../../components/About/About'
import Doctors from '../../components/Doctors/Doctors'
import Appointment from '../../components/Appointment'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <Icons />
      <Services />
      <About />
      {/* <Doctors />
      <Appointment /> */}
      <Footer />
    </div>
  )
}

export default HomePage
