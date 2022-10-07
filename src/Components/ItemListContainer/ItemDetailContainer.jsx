import React from 'react';
const ItemDetailContainer = ({ producto }) => {
    return (
        <>

            <div className="row g-0">
                <div className="col-md-4">
                    <img src={'../../imageProductos/' + producto.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 ">
                    <div className="card-body">
                        <h2 className="card-title Item-ListCont-title">{producto.nombre}</h2>
                        <h3 className="card-text Item-ListCont-title">{producto.detalle}</h3>
                        <h3 className="card-text Item-ListCont-title"><small className="text-muted">$ {producto.precio}</small></h3>
                    </div>
                    <div className='btn-carrito'>
                        <button type="button" className="btn btn-warning disabled Item-ListCont-title">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetailContainer;