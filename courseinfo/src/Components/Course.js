import React from 'react'
import Content from './Content'
import Header from './Header'

export default function Course({course,parts}) {
  return (
    <div>
         <Header course={course} />
      <Content parts={parts} />
    </div>
  )
}
