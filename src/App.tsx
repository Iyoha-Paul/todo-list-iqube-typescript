import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditTodo from "./pages/EditTodo";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
// x
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<TodoInput />} />
        <Route path="edit" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
