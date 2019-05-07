import React from "react";
import { render } from "react-dom";
import { TodoListContainer } from "./TodoListContainer";
import styled from "styled-components";

/*
font-family: 'Faster One', cursive;
font-family: 'Lato', sans-serif;
   
*/
const StyledApp = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Faster+One|Lato");
  font-family: "Lato", "Trebuchet MS", sans-serif;
  background-color: #81a69b;
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-columns: 2vw 1fr 2vw;
  grid-template-rows: repeat(20, 10vh); /* TODO: refactor this*/
  h1 {
    font-family: "Faster One", Geneva, Verdana, sans-serif;
    font-size: 3.2rem;
    grid-column: 1/-1;
    grid-row: 1;
  }
  button {
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.5);
  }
`;

const App = () => {
  return (
    <StyledApp className="app-wrapper">
      <h1>Lots To Do!</h1>
      <TodoListContainer />
    </StyledApp>
  );
};
render(<App />, document.getElementById("root"));
