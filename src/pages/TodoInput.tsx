import { useState } from "react";
import React from "react";

import { Todo } from "./../components/model";
import UsetodoObjects from "./../components/UsetodoObjects";
import Navbar from "./../components/Navbar";
import TodoListBody from "./../components/TodoListBody";

interface Props {
  inputWord?: string;
  setInputWord?: React.Dispatch<React.SetStateAction<string>>;
  todos?: Todo[];
  setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoInput: React.FC<Props> = () => {
  const { todos, setTodos, saveTodo } = UsetodoObjects();
  const [todo, setTodo] = useState("");
  const [startDate, setStartDate] = useState<string>();
  const [finishDate, setFinishDate] = useState<string>();
  // const [todo, setTodo] = useState("");

  const generateId = () => {
    const newId = Date.now();
    // id++;
    return newId;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo && todo !== " ") {
      let temp = {
        todo: todo,
        completed: false,
        id: generateId(),
        startDate: startDate,
        finishDate: finishDate,
      };
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
            <div className="todo__form__dates">
              <div className="todo__form__dates--start">
                <label>Start when?</label>
                <input
                  // className="todo__form__dates--start"
                  type="date"
                  required
                  placeholder="Start when?"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    console.log(todo);
                  }}
                />
              </div>
              <div className="todo__form__dates--finish">
                <label>Complete when?</label>
                <input
                  className=" "
                  type="date"
                  required
                  placeholder="Complete when?"
                  value={finishDate}
                  onChange={(e) => {
                    setFinishDate(e.target.value);
                    console.log(todo);
                  }}
                />
              </div>
            </div>
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
