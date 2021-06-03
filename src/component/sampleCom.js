import React, { Component } from "react";

class SampleCom extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   fname: "Dinesh"
    // };
    this.state = {};
    this.state.fname = "dinesh";
    this.state.lname = "kumar";
  }

  updateSate = (e, prop) => {
    console.log(prop + ": " + e.target.value);
    //this.state[prop] = e.target.value;
    //this.state.lname = "kumar111";
    this.setState({
      [prop]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.fname} {this.state.lname}
        </h1>
        <input type="text" onBlur={(e) => this.updateSate(e, "fname")} />
        <input type="text" onBlur={(e) => this.updateSate(e, "lname")} />
      </div>
    );
  }
}

export default SampleCom;
