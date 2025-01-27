import { useState } from "react";

const Heading = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  );
};

const Statistics = (props) => {
  const good = props.good
  const bad  = props.bad
  const neutral = props.neutral

  const all = good+bad+neutral
  const average = all/3
  const positive = (good/all)*100

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <table >
          <tr> <StatisticLine text="good" value ={good}/></tr>
        
          <tr> <StatisticLine text="neutral" value ={neutral}/> </tr>
        <tr><StatisticLine text = "bad" value ={bad} /> </tr>
        <tr><StatisticLine text = "all" value ={all}/> </tr>
       <tr> <StatisticLine text = "average" value ={average}/> </tr>
       <tr> <StatisticLine text = "positive" value ={positive+"%"}/> </tr>
        </table>
      </div>
      
    );
  }

};

const StatisticLine = (props) => {
  return (
    <div>
    <td >{props.text} </td> 
    <td >{props.value}</td> 
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
);



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => setGood(good + 1 );

  const handleNeutralClick = () =>
    setNeutral(neutral + 1 );

  const handleBadClick = () => setBad(bad + 1 );


  
  return (
    <div>
      <Heading />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
      

    </div>
  );
};

export default App;
