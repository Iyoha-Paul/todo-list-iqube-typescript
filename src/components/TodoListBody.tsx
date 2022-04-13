import React, { FC, useState } from "react";
import { Todo } from "./model";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListBody: React.FC<Props> = ({ todos, setTodos }) => {
  const handleDeleteTodo = (id: unknown) => {
    const temp = todos.filter((item: Todo) => item.id !== id);
    setTodos(temp);
    console.log(todos);
  };
  const handleToggleTodoCondition = (todo: Todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListBody;
