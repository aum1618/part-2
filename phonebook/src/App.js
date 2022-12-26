import React, { useState } from 'react';

function NameList() {
  // Declare a state variable called "names" with an initial value of an empty array
  const [names, setNames] = useState([]);

  // Declare a state variable called "name" with an initial value of an empty string
  const [name, setName] = useState('');

  // Event handler for the input element's "onChange" event
  function handleChange(event) {
    setName(event.target.value);
  }

  // Event handler for the form's "onSubmit" event
  function handleSubmit(event) {
    event.preventDefault();

    // Add the current value of "name" to the "names" array
    setNames([...names, name]);

    // Reset the value of "name" to an empty string
    setName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default NameList;
