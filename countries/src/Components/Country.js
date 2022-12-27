import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


export default function ({name,capital,area,languages,flag}) {
  const [weather,setWeather]=useState([])
  const API_KEY='9357414232db496584d31327221812'
  useEffect(() => {
    const promise = axios
      .get(`https://api.weatherapi.com/v1/current.json?key=9357414232db496584d31327221812&q=London`)
      .then((response) => {
        setWeather(response.data);
        console.log(weather)
      });
  }, []);
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
        <h2>Weather of {capital}</h2>
        {weather.length > 0 ? <p>the temperature is {weather.current.temp_c} °C</p> : null}
        {weather.length > 0 ? <p>Wind speed {weather.current.wind_kph} °C</p> : null}


        

    </div>
  )
}
