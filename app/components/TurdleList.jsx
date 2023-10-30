import React from 'react'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"
import RemoveButton from './RemoveButton'


const TurdleList = () => {
  return (
    <div className='flex justify-between items-start p-4 border border-slate-300'>
        <div>
            <h2 className='text-2xl font-bold'>Cook food</h2>
            <div>Make gnocci with tomato sauce</div>            
        </div>
        <div className='flex gap-2'>
          <RemoveButton />
          <Link href={'/editTurtle/1'}><HiPencilAlt size={24}/></Link>
        </div>
    </div>
  )
}

export default TurdleList