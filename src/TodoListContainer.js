import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import todosData from "./data.json";
import styled from "styled-components";
import TodoForm from "./TodoForm";

const StyledListContainer = styled.div`
  background-color: radial-gradient(45deg, grey 0%, darkgrey 100%);
  grid-column: 2;
  border: 2px solid green;
  height: 80vh;
  display: grid;
  grid-template-columns: 60vw;
  grid-template-rows: repeat(8, 5vh);
`;

export const TodoListContainer = () => {
  const [todos, setTodos] = useState(todosData);

  const addTodo = text => {
    const newTodos = [...todosData, { text }];
    setTodos(newTodos);
  };
  return (
    <StyledListContainer className="todo-list-container">
      {todos.map((item, idx) => (
        <TodoItem key={idx} idx={idx + 1} todo={item} />
      ))}
      <TodoForm addTodo={addTodo} />
    </StyledListContainer>
  );
};
