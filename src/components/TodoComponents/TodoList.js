// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TodoListStyle = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const ClearBtnStyle = styled.button`
  height: 7%;
  width: 15%;
  border-radius: 60px;
  border: none;
  margin: 10px;
  outline: none;
  color: white;
  font-size: 20px;
  text-align: center;
  background: #c3c3c3;
  box-shadow: 0px 5px 15px #c3c3c3;
`;

const TodoList = props => {
  return (
    <TodoListStyle className="todo-list">
      {props.todo.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <ClearBtnStyle className="clear-btn" onClick={props.clearCompleted}>
        Clear
      </ClearBtnStyle>
    </TodoListStyle>
  );
};
export default TodoList;
