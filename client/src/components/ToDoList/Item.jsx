import React from "react";

const Item = (props) => {
  function handleChange() {
    props.fDeleteItem(props.id);
  }

  return (
    <form>
      <div className="item">
        <input
          onChange={handleChange}
          type="checkbox"
          name={props.itemName}
          value={props.id}
        />
        <p>{props.itemName}</p>
      </div>
    </form>
  );
};

export default Item;
