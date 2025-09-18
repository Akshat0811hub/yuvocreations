import React from 'react'
import ParallaxMouseEffect from '../components/ParallaxMouseEffect'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import Contact from '../components/Contact'
import About from '../components/About'
import ImgCarousel from '../components/ImgCarousel'


const Home = () => {
  return (
    <div className='hero-section'>
      <Header/>
      <ParallaxMouseEffect/>
      <Tabs/>
      <About/>
      <Contact/>
      <ImgCarousel/>
    </div>
  )
}

export default Home