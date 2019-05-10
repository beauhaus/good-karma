import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledTodoItem = styled.div`
  padding: auto;
  text-align: left;
  grid-auto-flow: row;
  padding-right: 1%;
  padding-top: 1%;

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  animation: slider 1.2s cubic-bezier(0.07, 1.49, 0.19, 1.42) forwards;

  h2 {
    text-decoration: ${({ theme }) => theme.textDecoration};
    color: whitesmoke;
    font-weight: 200;
    font-size: 2.5rem;
    grid-column: 1;
    margin: auto 0 auto 1vw;
  }
  & button {
    grid-row: 1;
    cursor: pointer;
    max-height: 90%;
    width: 8vh;
    display: grid;
    font-size: 2rem;
    p {
      margin: auto;
      font-family: "Montserrat", "Trebuchet MS", sans-serif;
      font-size: 2.7rem;
    }
  }
  & div.btn-container {
    grid-column: -1;
    display: grid;
  }
  & button.remove-btn {
    grid-column: -1;
    background: rgba(209, 148, 148, 0.5);
    border: 1px solid #d11a13;

    p {
      color: #d11a13;
    }
  }
  & button.done-btn {
    margin-right: 1vw;
    grid-column: -2;
    background: rgba(147, 209, 168, 0.2);
    border: 1px solid #93d1a8;
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
      <div className="btn-container">
        <button className="remove-btn" onClick={() => removeTodo(idx)}>
          <p> &#88;</p>
        </button>
        <button className="done-btn flash" onClick={() => completeTodo(idx)}>
          <p>&#10003;</p>
        </button>
      </div>
    </StyledTodoItem>
  </ThemeProvider>
);
