import React from 'react'

export default function Total({one,two,three}) {
  return (
    <div>Total of {[one, two, three ].reduce((a, b) => a + b, 0)} exercises</div>
  )
}
