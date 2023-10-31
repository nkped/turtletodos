'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('') 
  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()

    if ( !title || !description ) {
      alert('To create new Turtle please provider both title AND description')
      return
    }


    try {
      const res = await fetch('http://localhost:3000/api/turtles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ title, description })
      })
    
      if (res.ok) { 
        router.push('/')
        router.refresh()
        }
        else {
          throw new Error('Failed to create new Turtle..')
      }
    }
    catch(err) {
      console.log(err.message, err)
    }
  }

  return (
    
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
            className='px-6 py-2 border border-slate-400'
            type='text'
            placeholder='Turtle title..' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            />
        <input 
            className='px-6 py-2 border border-slate-400'
            type='text'
            placeholder='Turtle description..' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            />
        <button type='submit' className='px-6 py-2 mt-1 text-white bg-green-500 text-bold' >Create</button>
    </form>
  )
}

export default page