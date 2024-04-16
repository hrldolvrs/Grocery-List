import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    //form validation
    if (!name) return;

    const newItem = { name, quantity, id: Date.now(), isChecked: false };
    console.log(newItem);

    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 30 }, (_, n) => n + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="darker-input"
          type="text"
          placeholder="Add an item.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>Add!</button>
      </form>
    </div>
  );
}

export default Form;