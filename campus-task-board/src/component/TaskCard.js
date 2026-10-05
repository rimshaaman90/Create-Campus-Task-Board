import React from "react";

function TaskCard(props) {
  return (
    <div>
      <h3>{props.task.title}</h3>
      <p>Category: {props.task.category}</p>
    </div>
  );
}

export default TaskCard;

