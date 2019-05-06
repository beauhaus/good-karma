import React from "react";
export const TodoItem = ({ todo, idx }) => (
  <div className="todo-item">
    item {idx}: {todo.text}
  </div>
);
