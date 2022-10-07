import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../funciones';

const CategoriaProductos = () => {

    const [productos, setProductos] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        consultarBDD('../../StockProductos.json').then(productos => {

            const productosCategoria = productos.filter(producto => producto.idCategoria === parseInt(id))

            console.log(consultarBDD('../../StockProductos.json'))
            console.log(productos.idCategoria)
            console.log(productosCategoria)

            const cardProducto = productosCategoria.map(producto =>
                <div className="itemList-children" key={producto.id}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{producto.detalle}</h5>
                            <h6 className="card-subtitle text-muted">${producto.precio}</h6>
                        </div>

                        <div className="card-body">
                            <img src={"../../imageProductos/" + producto.img} className="img-oferta" alt="" />
                        </div>
                        <div className="card-body">
                            <button type="button" className="btn btn-warning" ><Link to={'/ItemsList/' + producto.id}>Ver Producto</Link> </button>
                        </div>
                    </div>
                </div>)

            setProductos(cardProducto)
        })
    }, [id]);

    return (


        <> {productos}</>


    );
}

export default CategoriaProductos;