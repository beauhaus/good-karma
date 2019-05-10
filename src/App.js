import React from "react";
import { render } from "react-dom";
import { TodoListContainer } from "./TodoListContainer";
import styled, { createGlobalStyle } from "styled-components";

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
    border: 2px solid yellow;
  }

`;

const StyledApp = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Faster+One|Montserrat:100,200,300,400");
  font-family: "Montserrat", "Trebuchet MS", sans-serif;
  font-weight: 200;
  background: linear-gradient(360deg, #060d0b 0%, #81a69b 100%);
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-columns: 2vw 1fr 2vw;
  h1 {
    font-family: "Faster One", Geneva, Verdana, sans-serif;
    font-size: 4rem;
    grid-column: 1/-1;
    grid-row: 1;
    margin-top: 1rem;
    text-shadow: 2px 2px 10px #fafad2;
  }
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
  border: 1px dashed fuchsia;
`;

const App = () => {
  return (
    <StyledApp className="app-wrapper">
      <React.Fragment>
        <GlobalStyles />
        <h1>Good Karma</h1>
        <TodoListContainer />
      </React.Fragment>
    </StyledApp>
  );
};
render(<App />, document.getElementById("root"));
