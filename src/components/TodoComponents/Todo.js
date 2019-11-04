import React from "react";
import styled from "styled-components";

const ItemStyled = styled.div`
  width: 70%;
  height: 7%;
  background: #f1f1f1;
  border-radius: 50px;
  box-shadow: 0px 5px 12px #cacaca;
  margin: 10px;
`;

const StyledP = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  font-family: "Open sans", sans-serif;
  margin: 0;
  padding: 5px 0 0 20px;
  font-size: 20px;
`;

const Todo = props => {
  let itemClassName = "item";
  if (props.item.completed) {
    itemClassName = itemClassName + "task completed";
  }

  const handleClick = e => {
    e.preventDefault();
    props.toggleCompleted(props.item.id);
  };

  return (
    <ItemStyled onClick={handleClick} className={itemClassName}>
      <StyledP> {props.item.task}</StyledP>
    </ItemStyled>
  );
};

export default Todo;
