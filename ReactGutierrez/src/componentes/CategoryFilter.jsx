import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CategoryFilter = ({ onFilterChange }) => {
  const { productos } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  // Obtener todas las categorías disponibles de los productos

  const categories = [...new Set(productos.map(producto => producto.categoria))];

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category); // Llama a la función de actualización pasada como prop
  };

  return (
    <div className="category-filter">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value=''>Todas las categorías</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
