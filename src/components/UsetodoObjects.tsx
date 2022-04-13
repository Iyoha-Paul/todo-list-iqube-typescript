import React, { useState } from "react";

import { Todo } from "./model";

const UsetodoObjects = () => {
  const [inputWord, setInputWord] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [todo, setTodo] = useState("");
  let Alltodos = JSON.parse(localStorage.getItem("todos") || "[]");

  const saveTodo = (todo: Todo) => {
    Alltodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(Alltodos));
  };
  const handleDeleteTodo = (id: number) => {
    Alltodos = todos.filter((item: Todo) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(Alltodos));
  };
  return { todos, setTodos, saveTodo };
};

export default UsetodoObjects;
