import CountryDetail from './CountryDetail.jsx'
import Show from './Show.jsx'

const Country = (props) => {

  if (props.length  === 1) {

    const languages = Object.values(props.country.languages)
    
    return (
      <CountryDetail country={props.country} languages={languages}/>
    )
  }
  
  return (
    <div >
      {props.country.name.common}
      <Show country={props.country}/>
    </div>
  )
  
}

export default Country
