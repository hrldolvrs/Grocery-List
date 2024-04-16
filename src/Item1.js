function Item1({itemObj}) {
    return (
        <div>
            <li>
                {itemObj.quantity + "" + itemObj.name}
            </li>
        </div>
    )
}

export default Item1;