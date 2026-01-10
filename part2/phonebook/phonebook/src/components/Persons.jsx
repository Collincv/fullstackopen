import Person from './Person'


const Persons = (props) => {
  return (
  <ul>
    {props.showAll
     ? props.persons.map(person => <Person key={person.name} person={person} />)
     : props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))
     .map(person => <Person key={person.name} person={person} />) 
    }
  </ul>
  )
}

export default Persons
