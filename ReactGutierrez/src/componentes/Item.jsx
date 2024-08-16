import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import '../styles/Item.css';

const Item = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="item-card">
      <img src={item.imagen} alt={item.nombre} />
      <div className="item-text">
        <h3>{item.nombre}</h3>
        <p className="price">${item.precio.toFixed(2)}</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Ocultar Detalles' : 'Mostrar Detalles'}
        </button>
        {showDetails && (
          <div className="item-details">
            <p>{item.descripcion}</p>
          </div>
        )}
        <div className="card-actions">
          <button className='button' onClick={() => addToCart(item)}>Agregar al carrito</button>
          <button className='button' onClick={() => removeFromCart(item)}>Quitar del carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
