import React, { useState } from "react";
import List from "./Components/List";
import axios from "axios";
import { useEffect } from "react";

function NameList() {
  // Declare a state variable called "names" with an initial value of an empty array
  const [names, setNames] = useState([]);
  // Declare a state variable called "filterList" with an initial value of an empty array
  const [filterList, setFilterList] = useState([]);

  // Declare a state variable called "name" with an initial value of an empty string
  const [newName, setName] = useState("");
  const [number, setNumber] = useState("");
  // Declare a state variable called "filter" with an initial value of an empty string
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setNames(response.data);
    });
  }, []);

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
    if (names.some((name) => name.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // Add the current value of "name" to the "names" array
      let Data = { name: newName, number: number };
      setNames([...names, Data]);
      addContact(Data);
      // Reset the value of "name" to an empty string
      setName("");
      setNumber("");
    }
  }

  // Function to add a new contact to the API
  function addContact(contact) {
    axios.post("http://localhost:3001/persons", contact).then((response) => {
      console.log(response);
    });
  }

  // Function to delete a contact from the API
  function deleteContact(id,name) {
    let text=`are you sure you want to delete ${name} ?`
    if(confirm(text)==true){
    axios.delete(`http://localhost:3001/persons/${id}`).then((response) => {
      console.log(response);
      // Remove the deleted contact from the list of contacts in the component
      setNames(names.filter((contact) => contact.id !== id));
    })}else{return}
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h2>Add a New</h2>
      <label>
        Name:
        <input type="text" value={newName} onChange={handleChange} />
        <br />
        <br />
        Number:
        <input type="text" value={number} onChange={handleNumber} />
      </label>
      <button type="submit">Add</button>
    </form>
    <h2>Numbers</h2>
    <List list={names} deleteContact={deleteContact} />
  
    <h2>Filtered list</h2>
    <List list={filterList} deleteContact={deleteContact} />
  </div>
);
}

export default NameList;
