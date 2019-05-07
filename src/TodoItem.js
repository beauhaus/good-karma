import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledTodoItem = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  text-decoration: ${({ theme }) => theme.textDecoration};
  border: 0.1rem solid #d6d6d6;
  text-align: left;
  grid-column: 1;
  & button {
    float: right;
    height: 100%;
  }
  & button:nth-child(1) {
    background: #d19494;
  }
  & button:nth-child(2) {
    background: #93d1a8;
  }
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
      <button onClick={() => removeTodo(idx)}>X</button>
      <button onClick={() => completeTodo(idx)}>√</button>
    </StyledTodoItem>
  </ThemeProvider>
);
