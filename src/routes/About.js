import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import MyImg2 from '../components/MyImg2'
import AboutContent from '../components/About/AboutContent'

const About = () => {
  return (
    <div>
    <Navbar/>
    <MyImg2 heading="About" text="Some of them"/>
    <AboutContent/>
    <Footer/>
  </div>
  )
}

export default About