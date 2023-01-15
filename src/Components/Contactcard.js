import React from "react";
import user from "../Images/user.png";

const Contactcard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="container-div">
      <img className="avatar" src={user} alt="user" />
      <div className="field-div">
        <h4>{name}</h4>
        <p>{email}</p>
        <button
          className="Delete-button"
          onClick={() => props.clickHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contactcard;
