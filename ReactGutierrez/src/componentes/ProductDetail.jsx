import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams(); // Obtén el id del producto de los parámetros de la URL
  const { fetchProductDetail, selectedProduct } = useContext(CartContext);

  useEffect(() => {
    fetchProductDetail(id);
  }, [id, fetchProductDetail]);

  if (!selectedProduct) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div className="product-detail">
      <h1>{selectedProduct.nombre}</h1>
      <img src={selectedProduct.imagen} alt={selectedProduct.nombre} />
      <p>{selectedProduct.descripcion}</p>
      <p><strong>Categoría:</strong> {selectedProduct.categoria}</p>
      <p><strong>Precio:</strong> ${selectedProduct.precio}</p>
    </div>
  );
};

export default ProductDetail;
