const Persons = ({ persons }) => {


    
  const Name = ({ persons }) => {
    return <li>{persons.name} {persons.number}</li>;
  };

  
    return (
      <div>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person, index) => (
            <Name key={index} person={person} />
          ))}
        </ul>
      </div>
    );
  };




export default Persons