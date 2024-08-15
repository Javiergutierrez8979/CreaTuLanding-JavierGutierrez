import React from 'react';

const ItemList = ({ productos }) => {
  if (!productos) {
    // Mostrar un mensaje de carga o error si productos es undefined
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-list">
      {productos.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        productos.map((producto) => (
          <div key={producto.id} className="item-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="card-content">
              <h2 className="card-title">{producto.nombre}</h2>
              <p className="card-description">{producto.descripcion}</p>
              <p className="card-price">${producto.precio.toFixed(2)}</p>
              <p className="card-rooms">Habitaciones: {producto.habitaciones}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
