import React, { useState, useEffect } from "react";
import Note from "./Note";
import NoteCreation from "./NoteCreation";
import "./note.css"

function Notes() {
  const [notes, setNotes] = useState([]);

  // This method fetches the records from the database.
  //Backend
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/notes/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const notes = await response.json();
      //Frontend
      setNotes(notes);
    }

    getRecords();

    return;
  }, [notes.length]);

  async function addNote(newNote) {
    //Frontend
    setNotes((previous) => {
      return [...previous, newNote];
    });

    //Backend
    await fetch("http://localhost:5000/note/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  async function deleteNote(id) {
    //Frontend
    setNotes((previous) => {
      return previous.filter((item) => {
        return item._id !== id;
      });
    });
    //Backend
    await fetch(`http://localhost:5000/note/delete/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="containerNotes">
      <NoteCreation fAddNote={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            fDeleteNote={deleteNote}
          />
        );
      })}
      <footer>
        <p>Copyright ⓒ {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Notes;
