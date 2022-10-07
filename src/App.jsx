import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Encabezadoinicial from './Components/Encabezadoinicial.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import Contacto from './Components/Contacto.jsx';
import Nosotros from './Components/Nosotros.jsx';
import Carrito from './Components/Carrito.jsx';
import ItemsList from './Components/ItemListContainer/ItemsList';
import CategoriaProductos from './Components/ItemListContainer/CategoriaProductos';





const App = () => {
  return (
    <>
      <BrowserRouter>
        <Encabezadoinicial leyenda='Envíos sin cargo Tucumán - Compras superiores a $5.000' />
        <Navbar />

        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/ItemsList/:id" element={<ItemsList/>} />
          <Route path="/CategoriaProductos/:id" element={<CategoriaProductos/>} />
          


        </Routes>

      </BrowserRouter>

      
      
    </>
  );
}

export default App;
