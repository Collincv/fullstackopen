import { useEffect, useState } from 'react'
import './App.css'
import countriesService from './services/countries.js'
import Filter from './components/Filter.jsx'
import Countries from './components/Countries.jsx'
import weatherService from './services/weather.js'


const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)


  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    event.target.value  === ''
      ? setShowAll(true)
      : setShowAll(false)
  }

 
  
  useEffect(() => {
    countriesService
      .getAll()
      .then(countries=> {
        const names = countries.map(country => country.name.common)
        setCountries(countries)
      })
    
  }, [])

  
  return (
    <div>
      <Filter filter={filter} countries={countries} handler={handleFilterChange}></Filter>
      <Countries showAll={showAll}
                 countries={countries}
                 filter={filter}>
      </Countries>
    </div>
  )



}

export default App
