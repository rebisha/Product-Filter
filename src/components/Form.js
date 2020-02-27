import React, { Component } from "react";
import "./form.scss";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <form className="forms">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
