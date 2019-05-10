import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import todosData from "./data.json";
import styled from "styled-components";
import TodoForm from "./TodoForm";

const StyledListContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: grid;
  grid-template-columns: 95vw;
  grid-template-rows: 12vh;
  grid-auto-rows: 10vh;
  h1 {
    margin: 0;
    margin-top: 2vh;
    font-family: "Faster One", Geneva, Verdana, sans-serif;
    font-size: 4rem;
    text-shadow: 2px 2px 10px #fafad2;
  }
  & > div,
  form {
    background: rgba(145, 184, 172, 0.5);
    margin-top: 0.2rem;
    grid-column: 1;
    display: grid;
    grid-template-columns: 6fr 1fr 1fr;
    text-align: left;
  }
  button:hover {
    animation: brightness 0.2s forwards;
  }

  @-webkit-keyframes brightness {
    0% {
      -webkit-filter: brightness(none);
    }
    20% {
      -webkit-filter: brightness(10);
    }
    70% {
      -webkit-filter: brightness(5);
    }
    100% {
      -webkit-filter: brightness(2);
    }
  }
  @keyframes brightness {
    0% {
      filter: brightness(none);
    }
    20% {
      filter: brightness(10);
    }
    70% {
      filter: brightness(5);
    }
    100% {
      filter: brightness(2);
    }
  }

  /* SLIDER ANIMATION */
  @-webkit-keyframes slider {
    0% {
      transform: translateX(150vw);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slider {
    0% {
      transform: translateX(150vw);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const TodoListContainer = () => {
  const [todos, setTodos] = useState(todosData);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = idx => {
    const newTodos = [...todos];
    newTodos[idx].completed = true;
    setTodos(newTodos);
  };
  const removeTodo = idx => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  return (
    <StyledListContainer className="todo-list-container">
      <h1>Good Karma</h1>
      {todos.map((item, idx) => (
        <TodoItem
          key={idx}
          idx={idx}
          todoItem={item}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </StyledListContainer>
  );
};
