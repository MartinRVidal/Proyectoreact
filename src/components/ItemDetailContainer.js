import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
    { id: 1, image: "https://newsport.vteximg.com.br/arquivos/ids/13509348-1000-1000/VLL2071-A.jpg?v=637883865674970000", category: "remeras", title: "remera lebron", description: "Remera off white de puro poliester de alta calidad", price: "$40.400" },
    { id: 2, image: "https://newsport.vteximg.com.br/arquivos/ids/14029625-1000-1000/VL21114602-A.jpg?v=637939320103730000", category: "remeras", title: "Remera 2pac", description: "remera 2pc de puro poliester elaborado bajo calidad premium ", price: " $25.000" },
    { id: 3, image: "https://newsport.vteximg.com.br/arquivos/ids/13679770-1000-1000/H45578-A.jpg?v=637897700476870000", category: "remeras", title: "Remera Adidas", description: "remera adidas originals corte oversize unisex de 100% algodon", price: "$15.000" },
    { id: 4, image: "https://newsport.vteximg.com.br/arquivos/ids/13971746-1000-1000/VN000D5INVY-A.jpg?v=637931378482270000", category: "zapatillas", title: "Zapatillas Vans old" ,description:"zapatilas de lona vans old school, perfectas para la temporada primavera-verano" , price:"$28.000"},
    { id: 5, image: "https://newsport.vteximg.com.br/arquivos/ids/14289348-1000-1000/172657-A.jpg?v=637979784124370000", category: "zapatillas", title: "Zapatillas Converse Weapon" ,description:"zapatillas converse weapon unisex para ellos y ellas. converse weapon es una zapatilla muy versatil para todo tipo de ocasion" , price:"$30.000"},
    { id: 6, image: "https://newsport.vteximg.com.br/arquivos/ids/14080980-1000-1000/DH8016001-A.jpg?v=637946024273900000", category: "zapatillas", title: "Zapatillas Nike Air max 97" ,description:"zapatillas nike air max 97 una zapatilla de moda y con una estetica muy minimalista y retro" , price:"$43.000"},
]

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise( resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });

        getData.then(res => setData(res.find(productos => productos.id === parseInt(detalleId))));
    }, [])

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer
