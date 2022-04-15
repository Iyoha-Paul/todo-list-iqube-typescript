import React, { useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { Todo } from "../components/model";
import Navbar from "../components/Navbar";

const EditTodo = () => {
  let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  const { id } = useParams();
  const importedId = Number(id);
  console.log(id);
  const [importedTodo] = todos.filter((item: Todo) => item.id === importedId);
  console.log(importedTodo);
  const { todo, completed, startDate, finishDate } = importedTodo;
  const [editingTodo, setEditingTodo] = useState(todo);
  const [doneEditting, setDoneEditting] = useState(false);
  const [editingStartDate, setEditingStartDate] = useState<string>(
    `${startDate}`
  );
  const [editingFinishDate, setEditingFinishDate] = useState<string>(
    `${finishDate}`
  );
  const [editingCompleted, setEditingCompleted] = useState<boolean>(completed);
  // FUNCTION
  const handleSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const temp = todos.map((item) => {
      if (item.id === importedId) {
        return {
          ...item,
          todo: editingTodo,
          completed: editingCompleted,
          startDate: editingStartDate,
          finishDate: editingFinishDate,
        };
      }
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(temp));
    setDoneEditting(true);

    console.log(todos);
  };
  return (
    <div>
      <Navbar />
      <div className="todo">
        {/* {importedTodo} */}
        <h1>Edit Todo</h1>
        <form action="" className="todo__form" onSubmit={handleSubmitEdit}>
          <input
            className="todo__form__input"
            type="text"
            required
            placeholder="Add Todo"
            value={editingTodo}
            onChange={(e) => {
              setEditingTodo(e.target.value);
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
                value={editingStartDate}
                onChange={(e) => {
                  setEditingStartDate(e.target.value);
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
                value={editingFinishDate}
                onChange={(e) => {
                  setEditingFinishDate(e.target.value);
                  console.log(todo);
                }}
              />
            </div>
          </div>
          {doneEditting === false ? (
            <button className="todo__form__submit" type="submit">
              Save Changes
            </button>
          ) : (
            <div>
              <p>Successfully saved</p>
              <NavLink
                to="/"
                className="todo__form__submit todo__form__submit--link"
              >
                Back to Homepage
              </NavLink>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
