const Person = ({person, handleDeleteClick}) => {
    //    console.log(name);
    return (
      <li>
        {person.name} {person.number}
        <button onClick={() =>
                  
                  handleDeleteClick(person.id)}>delete</button> 
      </li>
    )
}

export default Person
