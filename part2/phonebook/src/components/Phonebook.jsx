import { useState } from "react";

const Phonebook = (props) => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);


    if (nameExists) {
      alert(`${props.newName} is already added to the phonebook`);
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    

    setPersons([...persons, { ...nameObject, id: persons.length + 1 }]);
    setNewName("");
  };

  const Name = ({ persons }) => {
    return <li>{persons.name} {persons.number}</li>;
  };

  const filterPersons = persons.filter((person) =>
    person?.name?.toLowerCase().includes(filterName.toLowerCase())
  );

  const Searchfilter = (props) => {
    return (
      <div>
        filter shown with {""}
        <input value={props.filterName} onChange={handleFilter} />
      </div>
    );
  };

  const AddPerson = ({ newName, newNumber, handleNewName, handleNewNumber, addName }) => {
    return (
      <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Searchfilter filterName={filterName} />
      <AddPerson
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        addName={addName}
      />

      <h2>Numbers</h2>

      <ul>
        {filterPersons.map((person, index) => (
          <Name key={index} persons={person} />
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;
