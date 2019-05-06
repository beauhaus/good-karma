import React from "react";
import { render } from "react-dom";
import { TodoListContainer } from "./TodoListContainer";
import styled from "styled-components";

const StyledApp = styled.div`
  border: 1px solid blue;
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows: repeat(8, 10vh);
  h1 {
    grid-column: 2;
    grid-row: 1;
  }
`;

const App = () => {
  return (
    <StyledApp className="app-wrapper">
      <h1>TODO APP!</h1>
      <TodoListContainer />
    </StyledApp>
  );
};
render(<App />, document.getElementById("root"));
