import React from 'react'

function Receiver({age=0, name, year}) {
  return (
    <>
        <h1>Received Data :- {age}</h1>
        <h1>Received Data :- {name}</h1>
        <h1>Received Data :- {year}</h1>
    </>
  )
}

export default Receiver