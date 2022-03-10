import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotePanel from "./components/NotePanel";
import ToDoList from "./components/ToDoList";
import Blog from "./components/Blog";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navbar />
      {/* <div style={{ margin: 20 }}></div> */}
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
