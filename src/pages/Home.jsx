import React from 'react' 
// import ParallaxMouseEffect from '../components/ParallaxMouseEffect'
import Tabs from '../components/Tabs'
import Contact from '../components/Contact'
// import About from '../components/About'
import ImgCarousel from '../components/ImgCarousel'
import PremiumBezierCurve from '../components/beizercurve'
// import FluidCanvas from '../components/FluidCanvas'
// import SciFiHUD from '../components/SciFiHud'
import Hero from '../components/mouse'
import Banner from '../components/Banner'
import WhyChooseUs from '../components/WhyChooseUs'


const Home = () => {
  return (
    <div className='hero-section'>
      <Banner/>
      <Hero/>
      {/* <Header/> */}
      {/* <ParallaxMouseEffect/> */}
      <Tabs/>
      {/* <About/> */}
      {/* <PremiumBezierCurve/> */}
      <ImgCarousel/>
      <WhyChooseUs/>
      <Contact/>
    </div>
  )
}

export default Home