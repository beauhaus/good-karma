import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import todosData from "./data.json";

export const TodoListContainer = () => {
  const [todos, setTodos] = useState(todosData);
  return (
    <div className="todo-list-container">
      {todos.map((item, idx) => (
        <TodoItem key={idx} todo={item} />
      ))}
    </div>
  );
};
