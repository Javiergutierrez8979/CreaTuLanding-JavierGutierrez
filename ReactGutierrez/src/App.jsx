import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import Contacto from './componentes/Contacto';
import NotFound from './componentes/NotFound';
import Cart from './componentes/Cart';
import ProductDetail from './componentes/ProductDetail'; // Asegúrate de importar ProductDetail
import { CartProvider } from './context/CartContext'; // Importa el proveedor del contexto
import Footer from './componentes/Footer'; // Importa el componente Footer
import './styles/App.css';
import Ubicacion from './componentes/Ubicacion';

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con el proveedor de contexto */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Ruta para detalles del producto */}
          <Route path="*" element={<NotFound />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
        <Footer /> {/* Agrega el componente Footer */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
