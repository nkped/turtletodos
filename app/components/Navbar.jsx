import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-6 py-3 bg-slate-400'>
      <Link className='text-bold text-white' href='/'>My Turtles</Link>
      <Link className='text-bold text-white' href='/addTurtle'>New Turtle</Link>
    </nav>
  )
}

export default Navbar