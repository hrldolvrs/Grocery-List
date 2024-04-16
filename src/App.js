import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import ItemList from "./ItemList";
import Footer from "./Footer";

function App() {

  <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,600&display=swap')
</style>
  const [items, setItems] = useState([
    { id: 1, quantity: "2", name: "Milk", isChecked: false },
    { id: 2, quantity: "2", name: "Coffee", isChecked: false },
    { id: 3, quantity: "4", name: "Sugar", isChecked: false },
  ]);

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <br />
        <Form onAddItem={handleAddItem} />
        <ItemList
          items={sortedItems}
          onDeleteItem={handleDeleteItem}
          onCheckedItem={handleCheckedItems}
        />
        <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input</option>
            <option value="name">Sort by Name</option>
            <option value="checked">Sort by Check Status Order</option>
          </select>
          <button onClick={handleClearList}>Clear</button>
        </div>
        <br />
      </div>
      <Footer items = {items}/>
    </div>
  );
}

export default App;