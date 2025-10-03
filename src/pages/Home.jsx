import React from 'react' 
// import ParallaxMouseEffect from '../components/ParallaxMouseEffect'
import Tabs from '../components/Tabs'
import Contact from '../components/Contact'
// import About from '../components/About'
import ImgCarousel from '../components/ImgCarousel'
import PremiumBezierCurve from '../components/beizercurve'
import FluidCanvas from '../components/FluidCanvas'
import SciFiHUD from '../components/SciFiHud'


const Home = () => {
  return (
    <div className='hero-section'>
      <FluidCanvas/>
      <SciFiHUD/>
      {/* <Header/> */}
      {/* <ParallaxMouseEffect/> */}
      <Tabs/>
      {/* <About/> */}
      <PremiumBezierCurve/>
      <ImgCarousel/>
      <Contact/>
    </div>
  )
}

export default Home