import React from "react";

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
    <div onClick={handleClick} className={itemClassName}>
      <p> {props.item.task}</p>
    </div>
  );
};

export default Todo;
