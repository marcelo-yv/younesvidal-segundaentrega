import { Link} from 'react-router-dom';
import FormNavbar from './ComponentsNavbar/FormNavbar.jsx';
import SeccionesNavbar from './ComponentsNavbar/SeccionesNavbar.jsx';
import CartWidget from './ComponentsNavbar/CartWidget.jsx';



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Don Jorge - Tienda de Vinos</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <SeccionesNavbar />
                        <CartWidget/>
                        <FormNavbar busqueda='Buscar Producto'/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
