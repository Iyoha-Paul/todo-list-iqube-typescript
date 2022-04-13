import { useState } from "react";
import React from "react";

import { Todo } from "./model";

interface Props {
  inputWord: string;
  setInputWord: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoInput: React.FC<Props> = ({
  inputWord,
  setInputWord,
  todos,
  setTodos,
}) => {
  const [todo, setTodo] = useState("");

  const generateId = () => {
    const newId = Date.now();
    // id++;
    return newId;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      const temp = { todo: todo, completed: false, id: generateId() };
      // setInputWord(todo);
      setTodos([temp, ...todos]);
      // todos == [] ? setTodos(temp) : setTodos([...todos, temp]);
      console.log(todos);
      setTodo("");
    }
  };
  return (
    <div className="container">
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
  );
};

export default TodoInput;
