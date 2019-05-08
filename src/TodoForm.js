import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background: rgba(145, 184, 172, 0.5);
  margin: 0.2rem;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr;
  & .input-details {
    grid-column: 1;
    width: 99%;
    margin: auto;
    grid-template-columns: 1fr 1vh 9vh;
    height: 8vh;
    display: grid;
    & > input {
      font-size: 2.5rem;
      grid-column: 1;
      background: #879692;
      border: 1px solid transparent;
      box-shadow: inset 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
      padding: 2%;
      min-height: 8vh;
      &[type="text"] {
        color: #fafad2;
      }
      &::placeholder,
      &:placeholder-shown {
        font-style: italic;
        color: #fafad2;
        font-family: "Montserrat", "Trebuchet MS", sans-serif;
        font-weight: 200;
        letter-spacing: 0.2rem;
        font-size: 2.3rem;
      }
    }
    & > button.add-button {
      background: #ff9756;
      grid-column: 3;
      cursor: pointer;
      max-height: 8vh;
      position: relative;
      p {
        margin: auto;
        font-family: "Montserrat", "Trebuchet MS", sans-serif;
        font-weight: 100;
        font-size: 7rem;
        color: whitesmoke;
      }
    }
  }
`;

// .parent {
//   position: relative;
// }
// .child {
//   position: absolute;
//   top: 50%;
//   left: 50%;

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
      <div className="input-details">
        <input
          type="text"
          className="form-input"
          value={value}
          placeholder="add todo..."
          onChange={e => setValue(e.target.value)}
          onBlur={e => setValue(e.target.value)}
        />
        <button className="add-button" type="submit">
          <p>+</p>
        </button>
      </div>
    </StyledForm>
  );
};

export default TodoForm;
