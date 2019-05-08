import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import todosData from "./data.json";
import styled from "styled-components";
import TodoForm from "./TodoForm";

const StyledListContainer = styled.div`
  grid-column: 2;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 10vh;
  grid-auto-rows: 10vh;
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
