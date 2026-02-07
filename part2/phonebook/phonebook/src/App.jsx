import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'




const App = () => {
  const [persons, setPersons] = useState([])


  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        console.log(initialPersons)
        setPersons(initialPersons)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [updateMessage, setUpdateMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.map(person => person.name).includes(personObject.name)
      ? updatePerson(personObject)
      : personsService
      .create(personObject)
      .then(newPerson => {
        console.log(newPerson)
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')})
      .then(() => {
        setUpdateMessage(`${personObject.name} added`)
        setTimeout(() => {
          setUpdateMessage(null)
        }, 2000)
      })
  }

  const updatePerson = (personObject) => {
    const person = persons.find(p => p.name === personObject.name)
    const id = person.id
    console.log(id)

    if (window.confirm(`${personObject.name} already exist.  Update number?`)) {
      personsService
        .update(id, personObject)
        .then(() => {
          setPersons(persons.map(person => 
            person.id === id
              ? { ...person, number: personObject.number }
              : person
          ))
          console.log('updated person')
        })
        .then(() => {
          setUpdateMessage(`${personObject.name} updated`)
          setTimeout(() => {
            setUpdateMessage(null)
          }, 2000)
        })
        .catch(() => {
          setErrorMessage(`${personObject.name} is not found in the server`)
          setTimeout(() => {
            setUpdateMessage(null)
          }, 2000)
        })

    }

     else console.log('update declined')
    
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

  const handleDeleteClick = (id) => {
    const person = persons.find(p => p.id === id)
    const name = person.name
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then(() => { setPersons(persons.filter(person => id !== person.id))
                      console.log('person deleted')
                    })} else console.log('deletion cancelled')

  }

  const message = errorMessage || updateMessage
  const messageType = errorMessage ? 'error' : 'update'

    return (
      <div>
        <h1>Phonebook</h1>
        <Notification message={message} type={messageType}/>
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
                 handleDeleteClick={handleDeleteClick}
        />
        
        {/*}      <div>debug: {newName}</div>
           <div>debug: {newNumber}</div> */}
      </div>

  )
}

export default App

