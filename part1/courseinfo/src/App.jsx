const Header = ({course}) =>{
  return <h1>{course}</h1>
}
const Part = ({part, exercises}) =>{
  return <p>{part} {exercises}</p>
}
const Content = ({parts}) =>{
  return(
    <p>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
    </p>
  )
}
const Total = ({parts}) =>{
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App