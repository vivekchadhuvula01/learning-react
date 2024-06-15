import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
// import axios from 'axios';


const Contact = () => {

  const [user ,setUser] = useState([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // e.preventDefault();
    alert(`Thank you`)
    const result = await fetch('http://localhost:3000/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resultData = await result.text();
    console.log(resultData)

  }

  const GetUser = async () => {
    const GetResult = await fetch('http://localhost:3000/', {
      method: 'GET',
    })
    const resultData = await GetResult.json();
    console.log(resultData.name)
    setUser(resultData.name)

  }

  useEffect(() => {
    GetUser()
    

  }, [onSubmit])



  return (
    <>
      <section className='flex flex-wrap  text-white items-center flex-col justify-center gap-5 mt-8 mb-8'>
        <h1 className='text-4xl font-semibold'>Contact</h1>
        <form className='flex w-1/3  flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
          <label className='mb-0 ' htmlFor="name">Name</label>
          <input
            className='rounded-md mb-6 p-2 w-full text-black'
            type="text"
            name="name"
            {...register('name')}
            id="name"
            placeholder='Enter your Name' />
          <label className='mb-0 ' htmlFor="email">Email</label>
          <input
            className='rounded-md p-2 w-full text-black'
            type="email"
            name="email"
            {...register('email')}
            id="email"
            placeholder='Enter your Email' />
          <button

            type='submit'
            className='shadow-md flex shrink justify-center w-1/2 m-auto mt-8 pt-2 pb-2 pl-4 text-black font-semibold hover:bg-blue-200 pr-4  rounded-lg bg-blue-50 active:bg-blue-300'
          >Submit</button>
        </form>
      </section>
      <div className='h-[0.5px] opacity-10  w-full bg-white'></div>
    </>
  )
}

export default Contact
