import React from 'react'
import EditTurtle from '@/app/components/EditTurtle'

const getTurtleById = () => {}


const editPage = ({ params: {id}} ) => {
  return (
    <div><EditTurtle id={id} /></div>
  )
}

export default editPage