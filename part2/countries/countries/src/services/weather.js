import axios from "axios"

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="
const iconURL = "https://openweathermap.org/payload/api/media/file/10d@2x.png"


const api_key = import.meta.env.VITE_SOME_KEY


const getWeather = (capital, cca2) => {

  const request = axios.get(`${weatherURL}${capital},${cca2}&APPID=${api_key}&units=imperial`)

  return request.then(response => {
    return response.data})
}
  
export default {
  getWeather
}
