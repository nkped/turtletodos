'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const EditTurtle = ({ id, title, description }) => {

  const router = useRouter()
  const [ newTitle, setNewTitle ] = useState(title)
  const [ newDescription, setNewDescription ] = useState(description)

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:3000/api/turtles/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({  newTitle, newDescription })
    })
    if (res.ok) {
      router.refresh()
      router.push('/')
    } 
  }

  return (    
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      
      <input 
        className='px-6 py-2 border border-slate-400' 
        type='text' 
        value={newTitle} 
        onChange={(e) => setNewTitle(e.target.value)}
        />
      
      <input 
        className='px-6 py-2 border border-slate-500' 
        type='text' 
        value={newDescription} 
        onChange={(e) => setNewDescription(e.target.value)}
        />

      <button className='px-6 py-2 mt-1 text-white bg-green-400 text-bold'>Update Turtle</button>
      
    </form>
  )
}

export default EditTurtle