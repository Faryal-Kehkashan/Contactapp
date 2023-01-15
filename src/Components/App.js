import React, { useState, useEffect } from "react";
// import { uuid } from "uuid";
import Header from "./Header";
import Contactlist from "./Contactlist";
import Addcontact from "./Addcontact";
import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addcontactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <Addcontact addcontactHandler={addcontactHandler} />
      <Contactlist contacts={contacts} getID={removeContactHandler} />
    </>
  );
}

export default App;
