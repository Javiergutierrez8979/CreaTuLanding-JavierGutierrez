import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import '../styles/Item.css';

const Item = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="item-card">
      <img src={item.imagen} alt={item.nombre} />
      <div className="card-content">
        <h2 className="card-title">{item.nombre}</h2>
        <p className="card-price">${item.precio.toFixed(2)}</p>
        <p className="card-category">Categoría: {item.categoria}</p>
        <div className="card-actions">
          <button className='button' onClick={() => addToCart(item)}>Agregar al carrito</button>
          <button className='button' onClick={() => removeFromCart(item)}>Quitar del carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
