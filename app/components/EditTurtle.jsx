import React from 'react'

const EditTurtle = () => {
  return (
    <form className='flex flex-col gap-3'>
      <input className='px-6 py-2 border border-slate-400' type='text' placeholder='title'/>
      <input className='px-6 py-2 border border-slate-500' type='text' placeholder='description'/>
      <button className='px-6 py-2 mt-1 text-white bg-green-400 text-bold' >Update Turtle</button>
    </form>
  )
}

export default EditTurtle