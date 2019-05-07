import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledTodoItem = styled.div`
  text-decoration: ${({ theme }) => theme.textDecoration};
  font-size: 20px;
  font-weight: lighter;
  border: 1px solid whitesmoke;
  text-align: left;
  grid-column: 1;
`;

const done = {
  textDecoration: "line-through"
};
const pending = {
  textDecoration: "none"
};

export const TodoItem = ({ todo, idx, completeTodo }) => (
  <ThemeProvider theme={todo.completed ? done : pending}>
    <StyledTodoItem className="todo-item">
      {idx} {todo.text}
      <button onClick={completeTodo}>done</button>
    </StyledTodoItem>
  </ThemeProvider>
);
