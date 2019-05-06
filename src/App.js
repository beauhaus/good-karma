import React from "react";
import { render } from "react-dom";
import { TodoListContainer } from "./TodoListContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <h1>TODO APP!</h1>
      <TodoListContainer />
    </div>
  );
};
render(<App />, document.getElementById("root"));
