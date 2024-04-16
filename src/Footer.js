function Footer ({ items })  {
    let completedItem = items.filter((item) => item.isChecked).length;
    let percentage = Math.round((completedItem / items.length) * 100);
    return (
        <div>
            <p id = "header-text-2">
                You have {items.length} items in your list. and you aleady completed{" "}{completedItem}
                <h2 style = {{color: percentage === 100? "rgb(21, 212, 21)" : "rgb(250, 183, 0)"}}>{percentage} %</h2>
            </p>
        </div>
    )
}

export default Footer;