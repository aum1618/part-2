import React from 'react'

export default function Total({parts}) {
    var total=[]
    for(let i=0;i<parts.length-1;i++){
        total.push(parts[i].exercises)
    }
    return (
 

    <div>Total of {total.reduce((a, b) => a + b, 0)} exercises</div>
  )
}
