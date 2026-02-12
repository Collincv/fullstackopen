import Weather from "./Weather.jsx"

const countryDetail = (props) => {

  return(
    <div>
      <h1>{props.country.name.common}</h1>
      <div>Capital: {props.country.capital.join(', ')}</div>
      <div>Area: {props.country.area}</div>
      <h2>Languages</h2>
      <ul>
        {props.languages.map((language, index) =>
          {
            return <li key={index}>{language}</li>
          })}
      </ul>
      <img src={props.country.flags.png} width="200"/>
     <Weather country={props.country}/>
    </div>    
  )
}

export default countryDetail
