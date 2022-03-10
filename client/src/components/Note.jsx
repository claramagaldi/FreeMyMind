import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.fDeleteNote(props.id);
  }

  return (
    <div>
      <div className="note">
        <h1><b>{props.title}</b></h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
