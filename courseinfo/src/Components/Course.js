import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

export default function Course({course,parts}) {
  return (
    <div>
         <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
