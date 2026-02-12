import Country from "./Country"

const Countries = (props) => {

  let content
  
  if (!props.showAll) {
    content = props.countries.filter(country => {
      return country.name.common.toLowerCase().includes(props.filter.toLowerCase())
    })
  }

  return (
    <div>
      {props.showAll
       ? <div>Type in country</div>
       : content.length > 10
       ? <div>Too Many results.  Narrow your search</div>
       : content.map(country => <Country country={country}
                                         key={country.cca3}
                                         length={content.length}
                                ></Country>)
      }
    </div>
  )
}


export default Countries

