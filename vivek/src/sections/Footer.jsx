import React from 'react'
import github from '../assets/github-dark.svg'
import linkedin from '../assets/linkedin-dark.svg'


const Footer = () => {
    return (
        <footer className='text-gray-500 flex-wrap flex flex-col justify-center m-8 gap-8 items-center'>
            <section className='flex  gap-10 items-center justify-center'>
            <a href="https://github.com/vivekchadhuvula01" target='_blank'>
            <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/vivek-chadhuvula/" target='_blank'>
            <img src={linkedin} alt="linkedin" />
                </a>
            </section>
                &copy; 2024 All rights reserved
                
        </footer>
    )
}

export default Footer
