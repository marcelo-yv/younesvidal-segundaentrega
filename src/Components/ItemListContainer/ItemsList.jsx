import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';

const ItemsList = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch('../../StockProductos.json')
            .then(response => response.json())
            .then(data => {

                const producto1 = data.find(arrayp => arrayp.id == id)
                setProducto(producto1)

            })
    }, []);
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '1000px' }}>
                <ItemDetailContainer producto={producto} />
            </div>

        </>
    );
}

export default ItemsList;
