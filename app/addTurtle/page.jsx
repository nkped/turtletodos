'use client'
import React from 'react'
import { useState } from 'react'

const page = () => {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('') 

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/turtles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ title, description })
    })
    
    const response = await res.json()
    setDescription('')
    setTitle('')
    return response
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