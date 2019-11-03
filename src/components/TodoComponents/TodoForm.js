import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      itemName: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
    this.setState({
      itemName: ""
    });
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="item"
          value={this.state.itemName}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
