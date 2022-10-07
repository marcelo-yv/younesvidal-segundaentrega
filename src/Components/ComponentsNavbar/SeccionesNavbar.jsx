import { Link } from 'react-router-dom';

const SeccionesNavbar = () => {
    return (
        <>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Contacto"}>Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/Nosotros"}>Nosotros</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to={'/CategoriaProductos/1'} >Vinos</Link>
                        <Link className="dropdown-item" to={'/CategoriaProductos/2'} >otros</Link>
                        <Link className="dropdown-item" to={'/CategoriaProductos/3'} >otros1</Link>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Regaleria y Accesorios</a>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default SeccionesNavbar;
