import React from 'react'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <div className='w-full flex flex-col h-full bg-slate-800'>
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
