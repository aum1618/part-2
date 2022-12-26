import React from 'react'

export default function List({list}) {
  return (
    <div>
    {list.map((name, index) => (
      <p key={index}>
        {name.name} {name.number}
      </p>
    ))}
  </div>
  )
}
