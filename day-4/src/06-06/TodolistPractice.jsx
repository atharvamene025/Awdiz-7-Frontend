import React, { useState } from "react";

const TodolistPractice = () => {
  const [todo, setTodo] = useState("");
  console.log(todo, "todo");
  console.log(allTodos, "allTodos");

  const [allTodos, setAllTodos] = useState([]);

  function handleSubmit() {
    setAllTodos([todo]);
  }

  function handleChange(event) {
    setTodo(event.target.value);
    // console.log(event.target.value, event.target.name);
  }

  return (
    <div>
      <h1>Todo Practice</h1>
      <input name="Todo" onChange={handleChange} type="text" />
      <button onSubmit={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default TodolistPractice;
