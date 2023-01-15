import React from "react";
import "./App.css";
import Contactcard from "./Contactcard";

const Contactlist = (props) => {
  const deteleContactHandler = (id) => {
    props.getID(id);
  };
  const rendercontactlist = props.contacts.map((contact) => {
    return (
      <Contactcard
        contact={contact}
        clickHandler={deteleContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <>
      <div className="Contactlist">{rendercontactlist}</div>
    </>
  );
};

export default Contactlist;
