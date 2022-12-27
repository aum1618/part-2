import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import Country from './Components/Country'


export default function App() {
  const [filter,setFilter]=useState('')
  const [countries,setcountries]=useState([])
  const [filteredList,setFilteredList]=useState([])
  const [response,setResponse]=useState('')

  const[name,setName]=useState('')
  const[capital,setCapital]=useState('')
  const[area,setArea]=useState('')
  const[language,setLanguage]=useState({})
  const[flag,setFlag]=useState('')


  const handleFilter=(event)=>{
    setFilter(event.target.value)
    updateFilterList()

  }
  useEffect(()=>{
    const promise=axios.get('https://restcountries.com/v3.1/all').then(response=>{
      setcountries(response.data)
      
    })
  },[])

  const updateFilterList=()=>{
    const filteredCountries=countries.filter(countries=> countries.name.common.toLowerCase().includes(filter))
    if(filteredCountries.length>10){
      setResponse('Too Many Matches specify another filter')
      setFilteredList([])
      setArea('')
      setName('')
      setCapital('')
      setFlag('')
      setLanguage({})
    }else if(filteredCountries.length==1){
      setResponse('')
      setFilteredList([])
      setArea(filteredCountries[0].area)
      setName(filteredCountries[0].name.official)
      setCapital(filteredCountries[0].capital)
      setFlag(filteredCountries[0].flags.png)
      setLanguage(filteredCountries[0].languages)
    }
    else{
      setFilteredList(filteredCountries)
      setResponse('')
      setArea('')
      setName('')
      setCapital('')
      setFlag('')
      setLanguage({})
    }
    
  }
  
  
  return (
  <div>
    <label>
      search for cointries <input type="text" value={filter} onChange={handleFilter}  />
    </label>
    <div>
    {filteredList.map((name,index)=>{
  return <p key={index}>{name.name.official}</p>
})}
{response}

    </div>
    <Country name={name} capital={capital} area={area} languages={language} flag={flag} />
  </div>  
  )
}
