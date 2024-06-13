import React from 'react'

const Contact = () => {
    return (
      <>
      <section className='flex flex-wrap  text-white items-center flex-col justify-center gap-5 mt-8 mb-8'>
          <h1 className='text-4xl font-semibold'>Contact</h1>
          <form action="" className='flex w-1/3  flex-col gap-2'>
              <label className='mb-0 ' htmlFor="name">Name</label>
              <input className='rounded-md mb-6 p-2 w-full text-black'  type="text" name="name" id="name" placeholder='Enter your Name' />
              <label className='mb-0 ' htmlFor="email">Email</label>
              <input className='rounded-md p-2 w-full text-black' type="email" name="email" id="email" placeholder='Enter your Email' />
              <button className='shadow-md w-1/2 m-auto mt-8 pt-2 pb-2 pl-4 text-black font-semibold hover:bg-blue-200 pr-4  rounded-lg bg-blue-50 active:bg-blue-300' >Submit</button>
        </form>
            </section>
            <div className='h-[0.5px] opacity-10  w-full bg-white'></div>
            </>
  )
}

export default Contact
