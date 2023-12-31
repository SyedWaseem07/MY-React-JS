
import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {id} = useParams()
  return (
    <div className="w-full text-center text-3xl bg-gray-500 py-10">User : {id}</div>
  )
}

export default User