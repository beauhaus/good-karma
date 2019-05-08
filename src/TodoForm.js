import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0.2rem;
  padding: 0.2rem;
  background: #ffddb2;
  grid-column: 1;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-width: 0px;
  & > input {
    margin: 0;
    grid-column: 1/-1;
    background: transparent;
  }

  & > button.add-button {
    /* background: #ff9756; */
    background: rgba(145, 184, 172, 0.5);
    background: red;
    color: whitesmoke;
    /* font-size: 4rem; */
    font-weight: 100;
    /* width: 5rem; */
    grid-column: -1;
    /* border: 1px solid #c47d52; */
    /* border-radius: 50%; */
    /* margin: 0.2rem; */
  }
  & > input:placeholder-shown {
    color: red;
    font-family: "Montserrat", "Trebuchet MS", sans-serif;
    font-size: 1.3rem;
  }
`;
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <StyledForm className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={value}
        placeholder="add todo..."
        onChange={e => setValue(e.target.value)}
        onBlur={e => setValue(e.target.value)}
      />
      <button className="add-button" type="submit">
        +
      </button>
    </StyledForm>
  );
};

export default TodoForm;
