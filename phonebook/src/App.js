import React, { useState } from 'react';

function NameList() {
  // Declare a state variable called "names" with an initial value of an empty array
  const [names, setNames] = useState([]);

  // Declare a state variable called "name" with an initial value of an empty string
  const [name, setName] = useState('');
  const [number,setNumber]=useState('')

  // Event handler for the input element's "onChange" event
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleNumber(event) {
    setNumber(event.target.value);
  }


  // Event handler for the form's "onSubmit" event
  function handleSubmit(event) {
    event.preventDefault();
    if(names.name===name){
      alert(`${name} is already added to phonebook`)
    }else{

    // Add the current value of "name" to the "names" array
    let Data={name:name,number:number}
    setNames([...names,Data]);

    // Reset the value of "name" to an empty string
    setName('');
    setNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} /><br />
          Number:
          <input type="text" value={number} onChange={handleNumber} />
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {names.map((name, index) => (
          <p key={index}>{name.name} {name.number}</p>
        ))}
      </div>
    </div>
  );
}

export default NameList;
