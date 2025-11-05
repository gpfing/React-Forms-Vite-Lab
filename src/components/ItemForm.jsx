import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ items, handleNewItem, onItemFormSubmit }) {
  const [item, setItemName] = useState({ name: "", category: "Produce" });
  
  function handleChange(event) {
    setItemName({ ...item, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = { ...item, id: uuid() };

    // add check for tests
    if (typeof onItemFormSubmit === "function") {
      onItemFormSubmit(newItem);
    } else if (typeof handleNewItem === "function") {
      handleNewItem({ item: newItem });
    }
    setItemName({ name: "", category: "Produce" });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="Add Item"
        />
      </label>

      <label>
        Category:
        <select name="category" value={item.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;