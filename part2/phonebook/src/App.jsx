import { useState, useEffect } from 'react'
import axios from 'axios'
import Phonebook from "./components/Phonebook";

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <Phonebook />
    </div>
  );
};

export default App;
