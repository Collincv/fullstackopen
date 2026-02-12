import axios from "axios"

const countriesURL = "https://studies.cs.helsinki.fi/restcountries/api/all"

const countryURL = "https://studies.cs.helsinki.fi/restcountries/api/name/"

const getAll = () => {
  const request = axios.get(countriesURL)
  return request.then(response => response.data)
  
}

const getCountry = (country) => {
  const request = axios.get(`${countryURL}${country}`)
  return request.then(response => response.data)
}

export default {
  getAll,
  getCountry
}
