import React from 'react'
import html from '../assets/HTML5.png'
import css  from '../assets/CSS3.png'
import JavaScript  from '../assets/JavaScript (1).png'
import tailwind  from '../assets/Tailwind CSS.png'
import react  from '../assets/React.png'
import Express  from '../assets/Express.png'
import nodejs  from '../assets/Node.js.png'
import mongodb  from '../assets/MongoDB.png'
import nextjs  from '../assets/nextjs.webp'
import postman  from '../assets/Postman.png'
import Git  from '../assets/Git.png'
import linux  from '../assets/Linux.png'

const Skills = () => {
  return (
    <>
    <section className='text-white mb-8 gap-10 items-center mt-8 flex flex-col'>
      <h1 className='text-4xl font-semibold '>Skills</h1>
    </section>
      <section className='w-full mb-8 text-white grid grid-col md:grid-cols-3 grid-cols-2 items-center place-content-center justify-self-center gap-8 ' >
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={html} alt="html" />HTML</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={css} alt="css" />CSS</p>
        <p className='flex flex-row-3 items-center  justify-center gap-4 '><img className='w-12 ' src={JavaScript} alt="js" />JavaScript</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={tailwind} alt="tailwind" />TailwindCSS</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={react} alt="react" />React</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={Express} alt="express" />Express</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={nodejs} alt="nodejs" />NodeJS</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={mongodb} alt="mongodb" />MongoDB</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={nextjs} alt="nextjs" />NextJs</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={postman} alt="postman" />Postman</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={Git} alt="Git" />Git&GitHub</p>
        <p className='flex flex-row-3 items-center justify-center gap-4 '><img className='w-12 ' src={linux} alt="linux" />Linux</p>
      </section>
      <div className='h-[0.5px] opacity-10  w-full bg-white'></div>
    </>
  )
}

export default Skills
