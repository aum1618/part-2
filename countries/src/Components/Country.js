import React from 'react'

export default function ({name,capital,area,languages,flag}) {
    const value= Object.values(languages)
    return (
    <div>
        <h2>{name}</h2>
        <p>Capital : {capital} </p>
        <p>Area : {area} </p>
        <h3>Languages </h3>
        <ul>
        {value.map((language,index)=>{
           return <li key={index}>{language}</li> 
        })}
        </ul>
        <img src={flag} />

        

    </div>
  )
}
