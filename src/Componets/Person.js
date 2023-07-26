import React from 'react'

function Person(props) {
  return (
    <div>
      <p> Name:{props.name}<br/>Age:{props.age}</p>
    </div>
  )
}

export default Person
