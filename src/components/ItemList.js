import React from "react";
import Item from "../components/Item";
import "./Components.css";

const ItemList = ({ data = [] }) => {
    return (
        data.map(productos => <Item key={productos.id} info={productos} />)
    );
}

export default ItemList;