import React from "react";
import { render } from "react-dom";
import { TodoListContainer } from "./TodoListContainer";
import styled, { createGlobalStyle } from "styled-components";
import "normalize.css/normalize.css";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #333;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-size: 1.6rem;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    text-align: center;
  }
`;

const StyledApp = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Faster+One|Montserrat:100,200,300,400");
  font-family: "Montserrat", "Trebuchet MS", sans-serif;
  font-weight: 200;
  background: linear-gradient(360deg, #060d0b 0%, #81a69b 100%);
  display: grid;
  grid-template-columns: 1fr 95vw 1fr;
  grid-template-rows: 14vh repeat(9, 10vh);
  width: 100vw;
  height: 100vh;
  button {
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.5);
    position: relative;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const App = () => {
  return (
    <StyledApp className="app-wrapper">
      <GlobalStyles />
      <TodoListContainer />
    </StyledApp>
  );
};
render(<App />, document.getElementById("root"));
