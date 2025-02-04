const Course =(props) => {
  console.log("Course",props)
  return(
    <div>
    <Header name={props.course.name}/>
    <Content parts={props.course.parts}/>
    <Total parts={props.course.parts}/>
    </div>
  );

};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log("content-", props.parts);
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  console.log("total",props)
  const parts = props.parts;

  let totex = 0;

  parts.forEach((part) => {
    totex = totex + part.exercises;
  });

  return (
    <div>
      <p>total of {totex} exercises</p>
    </div>
  );
};

const Part = (props) => {
  console.log("part", props);
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </div>
  );
}

export default App
