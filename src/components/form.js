import React from "react";

class Form extends React.Component {
  state = {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input />
        <input />
        <input />
        <input />
        <button type="submit"></button>
      </form>
    );
  }
}

export default Form;
