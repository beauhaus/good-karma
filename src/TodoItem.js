import React from "react";
import styled from "styled-components";

const StyledTodoItem = styled.div`
  color: whitesmoke;
  font-size: 20px;
  font-weight: lighter;
  border: 1px solid whitesmoke;
  text-align: left;
  grid-column: 1;
`;
export const TodoItem = ({ todo, idx }) => (
  <StyledTodoItem className="todo-item">
    {idx} {todo.text}
  </StyledTodoItem>
);
