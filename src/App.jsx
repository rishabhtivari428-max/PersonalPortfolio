import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import useLenis from './Uselenis'

const App = () => {
  useLenis()
  return (
   <div className='h-full'>
      <Navbar Name="RishabhXSharma"/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App