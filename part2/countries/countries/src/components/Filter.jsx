const Filter = (props) => {

  
  return (
    <div>
      <form>find countries: <input value={props.filter}
                                   onChange={props.handler}></input>
      </form>
    </div>

  )
  
}

export default Filter
