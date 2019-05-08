import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledTodoItem = styled.div`
  margin: 0.2rem;
  padding: 0.2rem;
  text-decoration: ${({ theme }) => theme.textDecoration};
  /* border: 0.1rem solid #d6d6d6; */
  background: rgba(145, 184, 172, 0.5);
  text-align: left;
  grid-column: 1;
  padding: 2%;
  font-size: 3rem;
  color: whitesmoke;
  & button {
    float: right;
    margin-right: 0.5rem;
    height: 100%;
  }
  & button:nth-child(1) {
    background: rgba(209, 148, 148, 0.2);
    color: #d19494;
    font-size: 2.5rem;
  }
  & button:nth-child(2) {
    background: rgba(147, 209, 168, 0.2);
    color: #93d1a8;
    font-size: 2.5rem;
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
