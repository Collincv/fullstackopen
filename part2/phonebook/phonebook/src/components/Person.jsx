const Person = ({person, handleDeleteClick}) => {
    //    console.log(name);
    return (
      <li>
        {person.name} {person.number}  <button onClick={() => handleDeleteClick(person.id)}>test</button> 
      </li>
    )
}

export default Person
