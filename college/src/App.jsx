import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programms from './Components/Programs/Programms'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className='container'>
      <Title subTitle="Find out what we offer" title="OUR PROGRAMS"/>
      <Programms />
      <About />
      <Title subTitle="Campus photos" title="Gallary"/>
      <Campus/>
      <Title subTitle="Best Students" title="TESTIMONIALS"/>
      <Testimonials />
      <Title subTitle="get in touch" title="Contact us"/>
      <Contact />
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
