import React from "react";
import { render } from "react-dom";
import { TodoListContainer } from "./TodoListContainer";
import styled from "styled-components";

/*
font-family: 'Faster One', cursive;
font-family: 'Lato', sans-serif;
   
*/
const StyledApp = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Faster+One|Montserrat:200,300,400");
  font-family: "Montserrat", "Trebuchet MS", sans-serif;
  font-weight: 200;
  background: linear-gradient(360deg, #060d0b 0%, #81a69b 100%);
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-columns: 2vw 1fr 2vw;
  grid-template-rows: repeat(20, 10vh); /* TODO: refactor this*/
  h1 {
    font-family: "Faster One", Geneva, Verdana, sans-serif;
    font-size: 4rem;
    grid-column: 1/-1;
    grid-row: 1;
    margin-top: 1rem;
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
