function Item({ itemList, onDeleteItem, onCheckedItem }) {
  return (
    <div className="list">
      <li style={{ textDecoration: itemList.isChecked ? "line-through" : "none", color: itemList.isChecked ? "rgb(238, 35, 35)" : "black" }}>{itemList.quantity + " " + itemList.name}</li>
      <button className = "delete-bttn" onClick={() => onDeleteItem(itemList.id)}>Delete</button>
      <button style={{ backgroundColor: itemList.isChecked ? "rgb(127, 201, 214)" : "rgb(127, 214, 127)"}} onClick={() => onCheckedItem(itemList.id)}>
        {itemList.isChecked ? "Uncheck" : "Check"}{" "}
      </button>
    </div>
  );
}
export default Item;