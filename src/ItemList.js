import Item from "./Item";

function ItemList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item
            itemList={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </ul>
    </div>
  );
}
export default ItemList;