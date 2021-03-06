import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NotePanel from "./components/Notes/NotePanel";
import ToDoList from "./components/ToDoList/ToDoList";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
import PostPanel from "./components/Blog/PostPanel";
import Post from "./components/Blog/Post";
function App() {
  return (
    <div className="containerApp">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/notes" element={<NotePanel />} />
        <Route exact path="/todolist" element={<ToDoList />} />
        <Route exact path="/blog" element={<PostPanel />} />
        <Route exact path="/blog/:id" element={<Post />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
