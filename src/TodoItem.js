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

export const TodoItem = ({ todoItem, idx, completeTodo, removeTodo }) => (
  <ThemeProvider theme={todoItem.completed ? done : pending}>
    <StyledTodoItem className="todo-item">
      {idx + 1}. {todoItem.text}
      <button onClick={() => completeTodo(idx)}>done</button>
      <button onClick={() => removeTodo(idx)}>X</button>
    </StyledTodoItem>
  </ThemeProvider>
);
