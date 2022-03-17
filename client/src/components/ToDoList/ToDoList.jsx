import React, { useState, useEffect } from "react";
import Item from "./Item";
import ItemCreation from "./ItemCreation";
import "./toDoListStyles.css";

const ToDoList = () => {
  const [items, setItems] = useState([]);

  // This method fetches the records from the database.
  //Backend
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/items/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const items = await response.json();
      //Frontend
      setItems(items);
    }

    getRecords();

    return;
  }, [items.length]);

  async function addItem(newItem) {
    //Frontend
    setItems((previous) => {
      return [...previous, newItem];
    });

    //Backend
    await fetch("http://localhost:5000/item/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  async function deleteItem(id) {
    //Frontend
    setItems((previous) => {
      return previous.filter((item) => {
        return item._id !== id;
      });
    });
    //Backend
    await fetch(`http://localhost:5000/item/delete/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div class="containerToDoList">
      <ItemCreation fAddItem={addItem} />
      {items.map((item) => {
        return (
          <Item
            key={item._id}
            id={item._id}
            itemName={item.itemName}
            fDeleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
