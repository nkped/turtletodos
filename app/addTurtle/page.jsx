import React from 'react'

const page = () => {
  return (
    <form className='flex flex-col gap-3'>
        <input
            className='px-6 py-2 border border-slate-400'
            type='text'
            placeholder='Turtle title..' 
            />
        <input 
            className='px-6 py-2 border border-slate-400'
            type='text'
            placeholder='Turtle description..'
            />
        <button className='px-6 py-2 mt-1 text-white bg-green-500 text-bold' >Create</button>
    </form>
  )
}

export default page