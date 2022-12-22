import React from 'react'
import Part from './Part'

export default function Content({ parts }) {
    var sum=[]
    for(let i=0;i<parts.length;i++){
        
        sum.push(<Part key={i} part={parts[i]} />)
        
    } 
    
    return (
    <>
   <div>{sum}</div>
    

  </>
  )
}
