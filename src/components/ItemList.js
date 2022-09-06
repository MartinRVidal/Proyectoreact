import React from "react";
import Item from "../components/Item";

const ItemList = ({data = []}) => {
    return (
        data.map(productos => <Item key={productos.id} info={productos}/>)
    );
}

export default ItemList;