import React from "react";
import styled from "styled-components";

const AddFormStyle = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 50%;
  align-items: flex-end;
`;

const AddInputStyle = styled.input`
  height: 20%;
  width: 30%;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  outline: none;
  color: black;
  &::placeholder {
       color: white;

  ${props =>
    props.type === "text"
      ? `
      :-internal-autofill-selected {
        background-color: rgb(232, 240, 254, 0) !important;
        background-image: none !important;
        color: rgb(0, 0, 0) !important;
      }

    `
      : null}
`;

const ButtonStyle = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  margin: 5px 5px 0 5px;
  outline: none;
  color: white;
  font-size: 15px;
  text-align: center;
  ${props => (props.type === "primary" ? `background: #67ed86` : null)}
  ${props =>
    props.type === "primary" ? `box-shadow: 0px 5px 12px #67ed86;` : null}
  ${props => (props.type === "secondary" ? `background: #EF6060` : null)}
  ${props =>
    props.type === "secondary" ? `box-shadow: 0px 5px 12px #EF6060;` : null}
`;

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
      <AddFormStyle className="form" onSubmit={this.handleSubmit}>
        <AddInputStyle
          onChange={this.handleChanges}
          type="text"
          name="item"
          value={this.state.itemName}
        />
        <ButtonStyle type="primary">+</ButtonStyle>
        <ButtonStyle type="secondary">-</ButtonStyle>
      </AddFormStyle>
    );
  }
}

export default TodoForm;
