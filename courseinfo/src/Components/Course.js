import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

export default function Course({course,parts}) {
  return (
    <div>
         <Header course={course} />
      <Content parts={parts} />
      <Total one={parts[0].exercises} two={parts[1].exercises} three={parts[2].exercises} />
    </div>
  )
}
