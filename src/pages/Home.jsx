import React from 'react'
import ParallaxMouseEffect from '../components/ParallaxMouseEffect'
import Header from '../components/Header'
import Tabs from '../components/Tabs'


const Home = () => {
  return (
    <div className='hero-section'>
      <Header/>
      <ParallaxMouseEffect/>
      <Tabs/>
    </div>
  )
}

export default Home