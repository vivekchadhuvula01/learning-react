import React from 'react'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'

const App = () => {
  return (
    <div className='w-full flex flex-col h-full bg-slate-800'>
      <Hero />
      <Skills />
    </div>
  )
}

export default App
