import React from 'react'
import vivek from '../assets/IMG_7451.jpg'
import Resume from '../assets/VivekChadhuvula_resume.pdf';

const Hero = () => {
    return (
        <section className='mt-10 flex mb-8 gap-10 flex-wrap items-center justify-center  '>
            <h1 className='text-6xl font-bold text-white '>Vivek <br />
                Chadhuvula</h1>
            <img src={vivek} alt="Main_Photo" className='rounded-full w-[20rem] float-none' />
            <p className='text-white flex mr-8 ml-8 mb-8 mt-0'> Welcome!
                I'm a passionate web developer with a strong foundation in MERN stack development (MongoDB, Express.js, React.js, and Node.js). I'm excited to showcase my skills and experience on this website, and I'm always looking for new opportunities to collaborate on creative and challenging projects.
            </p>
            <a
                className='pt-2 pb-2 pl-4 hover:bg-blue-200 pr-4 float-none rounded-lg bg-blue-50 active:bg-blue-300'
                href={Resume}
                download={'vivek Chadhuvula'}
                target='_blank'
                rel='noreferrer'
            ><button className='shadow-lg '>Resume</button></a>
       </section>
    )
}

export default Hero
