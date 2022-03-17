import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const ItemCreation = (props) => {
  const [item, setItem] = useState({
    itemName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function addItem(event) {
    if (item.itemName !== "") {
      props.fAddItem(item);
      setItem({
        itemName: "",
      });
      event.preventDefault();
    }
  }
  return (
    <div>
      <form className="item">
        <input
          name="itemName"
          value={item.itemName}
          onChange={handleChange}
          placeholder="New Item"
          type="text"
          autocomplete="off"
          required
        />
        <Fab onClick={addItem}>
          <AddIcon />
        </Fab>
        {/* <button onClick={addItem}>+</button> */}
      </form>
    </div>
  );
};

export default ItemCreation;
