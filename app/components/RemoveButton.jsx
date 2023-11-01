'use client'
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from 'next/navigation';

export default function RemoveButton({id}) {
  
  const router = useRouter()

  const handleDelete = async() => {
    const res = await fetch(`http://localhost:3000/api/turtles?id=${id}`, {
      method: 'DELETE'
    })

    if (res.ok) {
      router.refresh()
    }

    const response = await res.json()

    return response
  }

  return (
    <button onClick={handleDelete} className='text-red-400'><HiOutlineTrash size={24}/></button>
  )
}