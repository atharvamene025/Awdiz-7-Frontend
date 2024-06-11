import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAlltodos] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }
  function handleSubmit() {
    setAlltodos([...allTodos, todo]);
    setTodo("");
  }
  function deleteTodo(index) {
    const newArray = [...allTodos];
    newArray.splice(index, 1);
    setAlltodos(newArray);
  }
  return (
    <div
      style={{
        marginTop: "150px",
        height: "",
        width: "50%",
        margin: "auto",
        border: "3px solid black",
        backgroundColor: "rgb(207, 159, 255)",
      }}
    >
      <h1 style={{ color: "white" }}>Todo List</h1>
      <input
        style={{
          fontSize: "20px",
          height: "50px",
          width: "30%",
          backgroundColor: "#36454F",
          color: "white",
          border: "2px solid white",
        }}
        value={todo}
        name="mytodo"
        onChange={handleChange}
        type="text"
      />
      <br />
      <button style={{ marginTop: "10px" }} onClick={handleSubmit}>
        Submit Todo.
      </button>
      <h1 style={{ color: "darkmagenta" }}>Your Todos</h1>
      {allTodos.map((todo, i) => (
        <div style={{ color: "white" }}>
          {" "}
          <p
            key={i}
            style={{
              display: "flex",
              width: "50%",
              margin: "auto",
              justifyContent: "space-between",
            }}
          >
            <h1>
              {" "}
              {i + 1}.{todo}
            </h1>
            <button
              onClick={() => deleteTodo(i)}
              style={{ height: "50px", width: "20%", marginTop: "15px" }}
            >
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
