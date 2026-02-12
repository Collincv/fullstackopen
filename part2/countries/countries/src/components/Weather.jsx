import {useState, useEffect} from 'react'
import weatherService from "../services/weather.js"



const Weather = (props) => {

  const[weather, setWeather] = useState(null)

  console.log('weatherService:', weatherService)
  console.log('getWeather:', weatherService.getWeather)

  useEffect(() => {
    weatherService
      .getWeather(props.country.capital[0], props.country.cca2)
      .then(data => {
        setWeather(data)
      })
  }, [props.country])

   
  if (!weather) {return null}
  
  
  return (
    <div>
      <h2>Weather in {props.country.capital[0]}</h2>
      <div>Temperature: {weather.main.temp}</div>
      <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}/>
      <div>Wind: {weather.wind.speed} m/s</div>
    </div>

  )

}

export default Weather
