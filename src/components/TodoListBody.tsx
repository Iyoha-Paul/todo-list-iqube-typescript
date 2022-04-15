import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Todo } from "./model";
import UsetodoObjects from "./UsetodoObjects";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListBody: React.FC = () => {
  // const { todos, setTodos }: Props = UsetodoObjects();
  let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

  const handleDeleteTodo = (id: unknown) => {
    const temp = todos.filter((item: Todo) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(temp));
    window.location.reload();
    // setTodos(temp);
    console.log(todos);
  };
  const handleToggleTodoCondition = (todo: Todo) => {
    const temp = todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(temp));
    window.location.reload();

    console.log(todos);
  };
  return (
    <div className="todo-list-body">
      <ul className="todo-list-body__list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed === false ? "" : "stroke"}
          >
            <div className="todo-list-body__list__item">
              <i
                onClick={() => {
                  handleToggleTodoCondition(todo);
                }}
                className={
                  todo.completed === false
                    ? "fa-solid fa-circle clickable"
                    : "fa-solid fa-circle-check"
                }
              ></i>
              <p className={todo.completed === false ? "" : "stroke"}>
                {todo.todo}
              </p>
              <i
                className={
                  todo.completed === false
                    ? "fa-solid fa-trash-can"
                    : "fa-solid fa-trash-can stroke"
                }
                onClick={() => handleDeleteTodo(todo.id)}
              ></i>
            </div>
            <div className="todo-list-body__list__item--dates">
              <div>
                Start at: <span>{todo.startDate}</span>
              </div>
              {todo.completed === false ? (
                <NavLink to={`/edit/${todo.id}`} className="link">
                  <i className="fa-solid fa-pen-to-square"></i>
                </NavLink>
              ) : (
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={() => alert("can not edit a completed task")}
                ></i>
              )}
              <div>
                End at: <span>{todo.finishDate}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListBody;
