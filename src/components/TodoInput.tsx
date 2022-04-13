import { useState } from "react";
import React from "react";

import { Todo } from "./model";
import UsetodoObjects from "./UsetodoObjects";
import Navbar from "./Navbar";
import TodoListBody from "./TodoListBody";

interface Props {
  inputWord?: string;
  setInputWord?: React.Dispatch<React.SetStateAction<string>>;
  todos?: Todo[];
  setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoInput: React.FC<Props> = () => {
  const { todos, setTodos, saveTodo } = UsetodoObjects();
  const [todo, setTodo] = useState("");

  // const [todo, setTodo] = useState("");

  const generateId = () => {
    const newId = Date.now();
    // id++;
    return newId;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      let temp = { todo: todo, completed: false, id: generateId() };
      saveTodo(temp);
      // setInputWord(todo);
      // setTodos([temp, ...todos]);
      // todos == [] ? setTodos(temp) : setTodos([...todos, temp]);
      // console.log(todo);
      setTodo("");
    }
  };
  return (
    <div className="todo-input">
      <Navbar />
      <div className="container parallel">
        <div className="todo">
          <form action="" className="todo__form" onSubmit={handleSubmit}>
            <input
              className="todo__form__input"
              type="text"
              required
              placeholder="Add Todo"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
                console.log(todo);
              }}
            />
            <button className="todo__form__submit" type="submit">
              Add
            </button>
            <p>{todo}</p>
          </form>
        </div>
        <div className="todo todo--current">
          <h2>Present Tasks</h2>
          <TodoListBody />
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
