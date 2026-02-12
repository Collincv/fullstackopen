import { useState } from 'react'
import CountryDetail from './CountryDetail'


const Show = (props) => {

  const [show, setShow] = useState(false)

  const handleShowChange = () => {
    console.log('button clicked')
    setShow(!show)
    console.log(`Show is now ${show}`)
  }


  if (show) {
     
    const languages = Object.values(props.country.languages)
    
    return (
      <>
        <button onClick = {handleShowChange}>Show</button>
        <CountryDetail country={props.country} languages={languages}/>
      </>
    )
    
  }

  
  return(
    <button onClick = {handleShowChange}>Show</button>
    
  )

  
}

export default Show
