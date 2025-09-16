import React from 'react'
import ParallaxMouseEffect from '../components/ParallaxMouseEffect'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='hero-section'>
      <Header/>
        <ParallaxMouseEffect/>
    </div>
  )
}

export default Home