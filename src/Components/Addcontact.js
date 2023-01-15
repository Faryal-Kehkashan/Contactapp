import React from "react";
import "./App.css";

class Addcontact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All fields are required");
      return;
    } else if (this.state.name === "") {
      alert("Name field is empty");
      return;
    } else if (this.state.email === "") {
      alert("Email field is empty");
      return;
    }

    this.props.addcontactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <>
        <div className="main-div">
          <h2>Add Contact</h2>
          <form className="myform" onSubmit={this.add}>
            <div className="field">
              <label>Name : </label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              ></input>
            </div>

            <div className="field">
              <label>Email : </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              ></input>
            </div>
            <div>
              <button className="Addbutton">Add</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Addcontact;
