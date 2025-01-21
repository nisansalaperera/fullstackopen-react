const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log("content-",props)
  return (
    <div>
      <p>Contents</p>
      <Part  part={props.part1} />
      <Part  part={props.part2}  />
      <Part  part={props.part3}  />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const Part = (props) =>{
  console.log("part",props)
  return (
    <div>
        <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <Content part1={parts[0]} part2={parts[1] } part3={parts[2] }/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>

  )
}

export default App