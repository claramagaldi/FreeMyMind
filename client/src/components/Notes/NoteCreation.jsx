import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./noteStyles.css";

function NoteCreation(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function addNote(event) {
    if (note.title !== "" && note.content !== "") {
      props.fAddNote(note);
      setNote({
        title: "",
        content: "",
      });
      event.preventDefault();
    }
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        )}
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onClick={() => {
            setExpanded(true);
          }}
          required
        />
        <span
          onClick={() => {
            setExpanded(false);
          }}
        >
          <Zoom in={isExpanded}>
            <Fab onClick={addNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </span>
      </form>
    </div>
  );
}

export default NoteCreation;
