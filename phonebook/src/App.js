import React, { useState } from "react";
import List from "./Components/List";

function NameList() {
  // Declare a state variable called "names" with an initial value of an empty array
  const [names, setNames] = useState([]);
  // Declare a state variable called "filterList" with an initial value of an empty array
  const [filterList, setFilterList] = useState([]);

  // Declare a state variable called "name" with an initial value of an empty string
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // Declare a state variable called "filter" with an initial value of an empty string
  const [filter, setFilter] = useState("");

  // Event handler for the input element's "onChange" event
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleNumber(event) {
    setNumber(event.target.value);
  }

  // Event handler for the filter input element's "onChange" event
  function handleFilter(event) {
    setFilter(event.target.value);
    updateFilterList();
  }

  // Function to update the filterList state variable based on the current filter value
  function updateFilterList() {
    const filteredNames = names.filter((name) => name.name.includes(filter));
    setFilterList(filteredNames);
  }

  // Event handler for the form's "onSubmit" event
  function handleSubmit(event) {
    event.preventDefault();
    if (names.some((name) => names.name === name)) {
      alert(`${name} is already added to phonebook`);
    } else {
      // Add the current value of "name" and "number" to the "names" array as an object
      const data = { name: name, number: number };
      setNames([...names, data]);

      // Reset the value of "name" and "number" to empty strings
      setName("");
      setNumber("");
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <label>
        Filter shown with:
        <input type="text" value={filter} onChange={handleFilter} />
        <br />
      </label>
      <form onSubmit={handleSubmit}>
        <h2>Add a New</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
          <br />
          <br />
          Number:
          <input type="text" value={number} onChange={handleNumber} />
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <List list={names} />
    
      <h2>Filtered list</h2>
      <List list={filterList} />
    </div>
  );
}

export default NameList;
