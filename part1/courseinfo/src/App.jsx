const Header = (props) => {
  console.log(props)
  return (
    <>
    <h1>
      {props.course}
    </h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
    <p>
      {props.part} {props.exercise_count}
    </p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]} exercise_count={props.exercise_counts[0]}/>
      <Part part={props.parts[1]} exercise_count={props.exercise_counts[1]}/>
      <Part part={props.parts[2]} exercise_count={props.exercise_counts[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
    <p>
      Number of exercises {props.number}
    </p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of Redact'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]}
               exercise_counts={[exercises1, exercises2,exercises3]}/>
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
