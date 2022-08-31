import React,{useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrementar = () => {
        setCount(count - 1);
    }

    const incrementar = () => {
        setCount(count + 1);
    }

    return (
        <div className='contador'>
            <div className='boton-'>
            <button disabled={count <= 1} onClick={decrementar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incrementar}>+</button>
            </div>
            <div className='boton-anadir'>
                <button disabled={stock === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount
