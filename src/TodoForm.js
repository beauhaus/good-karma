import React, { useState } from "react";
// import styled from "styled-components";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={value}
        placeholder="add todo..."
        onChange={e => setValue(e.target.value)}
        onBlur={e => setValue(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default TodoForm;
