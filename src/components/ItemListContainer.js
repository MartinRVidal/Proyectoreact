import React, { useEffect, useState } from 'react';
import banner from '../images/banner.png';
import "../components/ItemListContainer.css";
import ItemCount from '../components/ItemCount';
import ItemList from "../components/ItemList";



const productos = [
    { id: 1, image: "https://newsport.vteximg.com.br/arquivos/ids/13509348-1000-1000/VLL2071-A.jpg?v=637883865674970000", title: "remera lebron" },
    { id: 2, image: "https://newsport.vteximg.com.br/arquivos/ids/14029625-1000-1000/VL21114602-A.jpg?v=637939320103730000", title: "remera 2pac" },
    { id: 3, image: "https://newsport.vteximg.com.br/arquivos/ids/13679770-1000-1000/H45578-A.jpg?v=637897700476870000", title: "remera adidas" },
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])


        const onAdd = (cantidad) => {
            console.log(`Compraste ${cantidad} unidades`);
        };

        return (
            <div>
                <div className='div-banner'>
                    <img src={banner} alt="" className='img-banner' />
                </div>
                <ItemCount initial={1} stock={7} onAdd={onAdd} />
                <ItemList data={data} />
            </div>
        )
    }

    export default ItemListContainer;
