import Navbar from "../components/Navbar";
import TodoInput from "../components/TodoInput";
import TodoListBody from "../components/TodoListBody";
import React, { useState } from "react";
import { Todo } from "../components/model";
import UsetodoObjects from "../components/UsetodoObjects";
const Home: React.FC = () => {
  // const { todos, setTodos, todo, setTodo } = UsetodoObjects();
  // const [inputWord, setInputWord] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([]);
  // let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "");
  const resetTodoList = () => {
    // setTodos([]);
    // console.log(todos);
  };
  // console.log(todos);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="todo">
          <div className="todo__header">
            <h1>
              TodoApp <span>(Powered by react)</span>
            </h1>
            <h2>What needs to be done?</h2>
            <button className="btn btn--refresh" onClick={resetTodoList}>
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
            {/* <TodoInput
              todos={todos}
              setTodos={setTodos}
              setInputWord={setInputWord}
              inputWord={inputWord}
            /> */}
          </div>
          {/* <TodoListBody todos={todos} setTodos={setTodos} /> */}

          <TodoListBody />
        </div>
      </div>
    </div>
  );
};

export default Home;
