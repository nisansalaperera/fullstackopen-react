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

  return (
    <div>
      <h1>statistics</h1>
      <div>good : {good}</div>
      <div>neutral :{neutral}</div>
      <div>bad :{bad}</div>
      <div>all :{all}</div>
      <div>average :{average}</div>
      <div>poitive :{positive} %</div>
    </div>
   

  );
};

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
