const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log("content-", props.parts);
  return (
    <div>
      <p>Contents</p>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  const parts = props.parts;
  let totex = 0;

  parts.forEach((part) => {
    totex = totex + part.exercises;
  });

  return (
    <div>
      <p>Number of exercises {totex}</p>
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
