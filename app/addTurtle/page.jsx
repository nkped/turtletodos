import React from 'react'

const page = () => {
  return (
    <form className='flex flex-col gap-3' border >
        <input
            className='py-2 px-6 border border-slate-400'
            type='text'
            placeholder='Turtle title..' 
            />
        <input 
            className='py-2 px-6 border border-slate-400'
            type='text'
            placeholder='Turtle description..'
            />
        <button className='bg-green-600 text-bold text-white px-6 py-2 w-fit' >Create</button>
    </form>
  )
}

export default page