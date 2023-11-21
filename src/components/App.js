import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    todos.push(todo);
    setTodo([...todo, todo]);
    setTodo("");
    console.log(todo);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i != index));
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <form>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div className="todoItem">
                <p>{todo}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
