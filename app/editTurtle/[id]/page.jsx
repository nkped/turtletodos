import React from 'react'
import EditTurtle from '@/app/components/EditTurtle'

const getTurtleById = async(id) => {

  const res = await fetch(`http://localhost:3000/api/turtles/${id}`
  )

  return res.json()
}


export default async function editPage({ params: {id}} ) {

  const { topic: { title, description }} = await getTurtleById(id)
  console.log(title, description)

  return (
    <div>
      <EditTurtle id={id} title={title} description={description}/>
    </div>
  )
}