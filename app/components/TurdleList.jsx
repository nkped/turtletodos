import React from 'react'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"
import RemoveButton from './RemoveButton'


const getTurtles = async() => {

  try {
    const res = await fetch('http://localhost:3000/api/turtles', {cache: 'no-store'})

    if (!res.ok) {
      throw new Error('Fetch of topics failed..')
    }    
    const topics = await res.json()
    return topics
  } 
  catch(err) {
    console.log(err.message)
  }
}

const TurdleList = async () => {
  
  const {topics} = await getTurtles()
  //console.log('topics from TurtleList function:  ',topics)

  return (
    <>
      {topics.map(t => (<div key={t._id} className='flex justify-between items-start p-4 border border-slate-300'>
            <div>
                <h2 className='text-2xl font-bold'>{t.title}</h2>
                <div>{t.description}</div>            
            </div>
            <div className='flex gap-2'>
              <RemoveButton />
              <Link href={'/editTurtle/1'}><HiPencilAlt size={24}/></Link>
            </div>
        </div>
        )
      )}
    </>
  )
}

export default TurdleList


/* try {
    const res = await fetch('http://localhost:3000/api/turtles')

    if (!res.ok) {
      throw new Error('Fetch of topics failed..')
    }    
    const topics = await res.json()
    return topics
  } 
  catch(err) {
    console.log(err)
  } */