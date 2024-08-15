import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="position-relative d-inline-block">
      <FaShoppingCart className="text-white fs-4" />
      {cartItems.length > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItems.length}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
