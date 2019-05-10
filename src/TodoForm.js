import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  grid-template-columns: 6fr 1fr 1fr;
  padding: 0.5% 1%;
  & > input {
    grid-column: 1;
    max-height: 90%;
    min-height: 8vh;
    width: 63vw;
    font-size: 2.5rem;
    background: #879692;
    box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
    padding-left: 2vw;
    border: 1px solid rgba(255, 151, 86, 0.4);
    &[type="text"] {
      color: #fafad2;
      /* margin-left: 21vw; */
    }
    &::placeholder,
    &:placeholder-shown {
      font-style: italic;
      font-family: "Montserrat", "Trebuchet MS", sans-serif;
      font-weight: 200;
      letter-spacing: 0.2rem;
      font-size: 2.3rem;
      padding-left: 2vw;
    }
  }
  & button.add-button {
    cursor: pointer;
    grid-column: -1;
    max-height: 95%;
    background-color: rgba(255, 151, 86, 0.4);
    width: 8vh;
    border: 1px solid #ffa544;

    p {
      margin: auto;
      font-family: "Montserrat", "Trebuchet MS", sans-serif;
      font-weight: 100;
      font-size: 6rem;
      color: #ffa544;
    }
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
        <p> &#43;</p>
      </button>
    </StyledForm>
  );
};

export default TodoForm;
