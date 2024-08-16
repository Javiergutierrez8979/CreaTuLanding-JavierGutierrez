import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Item from '../componentes/Item';
import CategoryFilter from '../componentes/CategoryFilter';

const ItemListContainer = () => {
  const { productos } = useContext(CartContext);
  const [filteredProductos, setFilteredProductos] = useState(productos);

  useEffect(() => {
    setFilteredProductos(productos);
  }, [productos]);

  const handleFilterChange = (selectedCategory) => {
    if (selectedCategory === '') {
      setFilteredProductos(productos);
    } else {
      const filtered = productos.filter(producto => producto.categoria === selectedCategory);
      setFilteredProductos(filtered);
    }
  };

  return (
    <div className="item-list-container">
      <CategoryFilter onFilterChange={handleFilterChange} />
      <div className="item-list">
        {filteredProductos.length > 0 ? (
          filteredProductos.map((producto) => (
            <Item key={producto.id} item={producto} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
