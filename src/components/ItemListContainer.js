import React, { useEffect, useState } from 'react';
import banner from '../images/banner.png';
import "../components/ItemListContainer.css";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router-dom';



const productos = [
    { id: 1, image: "https://newsport.vteximg.com.br/arquivos/ids/13509348-1000-1000/VLL2071-A.jpg?v=637883865674970000", category: "remeras", title: "Remera lebron" },
    { id: 2, image: "https://newsport.vteximg.com.br/arquivos/ids/14029625-1000-1000/VL21114602-A.jpg?v=637939320103730000", category: "remeras", title: "Remera 2pac" },
    { id: 3, image: "https://newsport.vteximg.com.br/arquivos/ids/13679770-1000-1000/H45578-A.jpg?v=637897700476870000", category: "remeras", title: "Remera Adidas" },
    { id: 4, image: "https://newsport.vteximg.com.br/arquivos/ids/13971746-1000-1000/VN000D5INVY-A.jpg?v=637931378482270000", category: "zapatillas" , title: "Zapatillas Vans old" },
    { id: 5, image: "https://newsport.vteximg.com.br/arquivos/ids/14289348-1000-1000/172657-A.jpg?v=637979784124370000", category: "zapatillas" , title: "Zapatillas Converse Weapon" },
    { id: 6, image: "https://newsport.vteximg.com.br/arquivos/ids/14080980-1000-1000/DH8016001-A.jpg?v=637946024273900000", category: "zapatillas" , title: "Zapatillas Nike Air max 97" },
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(productos => productos.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
        }, [categoriaId])




        return (
            <div>
                <div className='div-banner'>
                    <img src={banner} alt="" className='img-banner' />
                </div>
                <ItemList data={data} />
            </div>
        )
    }

    export default ItemListContainer;
