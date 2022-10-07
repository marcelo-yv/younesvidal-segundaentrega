import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const CartWidget = () => {
    {
        /*
         const const [contador, setContador] = useState([]);
     
         function Contador() {
          
         }
         */
    }

    return (
        <>
            <Link className="d-flex marg linkCarrito" to={"/Carrito"}>
                    <img src="../../../image/shoppingcart.png" alt="" />
                    <h3>0</h3>
            </Link>
        </>
    );
}

export default CartWidget;
