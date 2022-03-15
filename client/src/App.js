import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotePanel from "./components/Notes/NotePanel";
import ToDoList from "./components/ToDoList/ToDoList";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/notes" element={<NotePanel />} />
        <Route exact path="/todolist" element={<ToDoList />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
