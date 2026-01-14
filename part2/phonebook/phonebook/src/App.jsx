import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("check this out",response.data)
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  //    window.persons = persons

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.map(person => person.name).includes(personObject.name)
      ? alert(`${newName} is already in the phonebook`)
      : setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    event.target.value === ''
      ? setShowAll(true)
      : setShowAll(false)
  }

  
  

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handler={handleFilterChange}/>

      <h2>Add New</h2>
      <PersonForm addPerson={addPerson}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons showAll={showAll}
               persons={persons}
               filter={filter}
      />
      
      {/*}      <div>debug: {newName}</div>
         <div>debug: {newNumber}</div> */}
    </div>

  )
}

export default App



/*
  create a separate component for Filter, PersonForm, and Persons 
*/
