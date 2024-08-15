import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Item from '../componentes/Item'; // Asegúrate de tener este componente
import CategoryFilter from '../componentes/CategoryFilter'; // Importa el filtro de categorías

const ItemListContainer = () => {
  const { productos } = useContext(CartContext);
  const [filteredProductos, setFilteredProductos] = useState(productos);

  // Actualiza los productos filtrados cada vez que cambien los productos
  useEffect(() => {
    setFilteredProductos(productos);
  }, [productos]);

  // Función para actualizar los productos filtrados
  const handleFilterChange = (selectedCategory) => {
    if (selectedCategory === '') {
      setFilteredProductos(productos); // Mostrar todos los productos si la categoría es vacía
    } else {
      const filtered = productos.filter(producto => producto.categoria === selectedCategory);
      setFilteredProductos(filtered);
    }
  };

  return (
    <div className="item-list-container">
      <CategoryFilter onFilterChange={handleFilterChange} /> {/* Pasar la función de actualización */}
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
