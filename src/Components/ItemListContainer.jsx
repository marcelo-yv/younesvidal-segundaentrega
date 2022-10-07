import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarBBD = async () => {
            const response = await fetch('../StockProductos.json')
            const product = await response.json();

            console.log(product)

            const CardOfertas = product.map(ofertas =>
                
                <div className="itemList-children" key={ofertas.id}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{ofertas.detalle}</h5>
                            <h6 className="card-subtitle text-muted">${ofertas.precio}</h6>
                        </div>

                        <div className="card-body">
                            <img src={"../imageProductos/" + ofertas.img} className="img-oferta" alt="" />
                        </div>
                        <div className="card-body">
                            <button type="button" className="btn btn-warning" ><Link to={'/ItemsList/'+ ofertas.id}>Ver Producto</Link> </button>
                        </div>
                    </div>
                </div>
            
            )
            return CardOfertas
        }

        consultarBBD().then(productos => setProductos(productos))

    }, []);
    return (
        <>
            {productos}
        </>
    );
}

export default ItemListContainer;
