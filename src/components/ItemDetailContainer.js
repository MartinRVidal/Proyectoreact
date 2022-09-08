import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from 'react';

const productos = { id: 1, image: "https://newsport.vteximg.com.br/arquivos/ids/13509348-1000-1000/VLL2071-A.jpg?v=637883865674970000", title: "remera lebron", description: "Remera off white de puro poliester de alta calidad", price:"$40.400" };

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise( resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer
