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
      <Part part={props.parts[0].name} exercise_count={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise_count={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise_count={props.parts[2].exercises}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    

return (
    <div>
      <Header  course={course.name}/>
      <Content parts = {course.parts}/>
      <Total   number={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App
