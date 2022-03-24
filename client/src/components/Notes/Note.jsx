import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./noteStyles.css"


function Note(props) {
  function handleClick() {
    props.fDeleteNote(props.id);
  }

  return (

      <div className="note">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>

  );
}

export default Note;
