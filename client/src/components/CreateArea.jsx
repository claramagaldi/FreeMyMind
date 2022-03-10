import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.fAddNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
          onClick={() => {
            setExpanded(true);
          }}
        />
        <span
          onClick={() => {
            setExpanded(false);
          }}
        >
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </span>
      </form>
    </div>
  );
}

export default CreateArea;
