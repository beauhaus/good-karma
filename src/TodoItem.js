import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledTodoItem = styled.div`
  margin: 0.2rem;
  padding: auto;
  background: rgba(145, 184, 172, 0.5);
  text-align: left;
  grid-column: 1;
  border: 1px solid yellow;
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
  /* grid-template-rows: 1fr; */
  justify-content: space-between;
  text-align: left;
  grid-auto-flow: row;
  padding-right: 1%;
  padding-top: 1%;

  h2 {
    text-decoration: ${({ theme }) => theme.textDecoration};
    color: whitesmoke;
    font-size: 2.5rem;
    grid-column: 1/-3;
    border: 1px solid red;
    margin: auto 1vw;
  }
  & button {
    max-height: 90%;
    width: 8vh;
    display: grid;
    font-size: 2rem;
    grid-row: 1;
    p {
      margin: auto;
    }
    /* display: none; */
  }
  & button.remove-btn {
    /* display: grid; */
    grid-column: -1;
    background: rgba(209, 148, 148, 0.5);
    p {
      color: #d19494;
      margin: auto;
    }
  }
  & button.done-btn {
    margin-right: 1vw;
    grid-column: -2;
    background: rgba(147, 209, 168, 0.2);
    p {
      color: #93d1a8;
    }
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
      <h2>
        {idx + 1}. {todoItem.text}
      </h2>
      <button className="remove-btn" onClick={() => removeTodo(idx)}>
        <p>X</p>
      </button>
      <button className="done-btn" onClick={() => completeTodo(idx)}>
        <p>√</p>
      </button>
    </StyledTodoItem>
  </ThemeProvider>
);
