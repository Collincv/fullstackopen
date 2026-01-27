import Person from './Person'


const Persons = (props) => {
  return (
    <ul>
     {props.showAll
     ? props.persons.map(person => <Person key={person.id} person={person} handleDeleteClick={props.handleDeleteClick}/>)
     : props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))
     .map(person => <Person
                      key={person.id}
                      person={person}
                      handleDeleteClick={props.handleDeleteClick}/>) 
    }
  </ul>
  )
}

export default Persons
