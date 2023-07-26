import React from 'react'

function List(props) {
  return (
    <div>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    </div>
  )
}

export default List
