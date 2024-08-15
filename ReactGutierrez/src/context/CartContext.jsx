import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebaseconfig'; // Importa la configuración de Firebase

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productos, setProductos] = useState([]);

  // Función para obtener productos desde Firestore
  const fetchProductos = async () => {
    try {
      const productosCollection = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(productosList);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const finalizePurchase = async (name, phoneNumber) => {
    try {
      const orderCollection = collection(db, 'orders');
      const order = {
        items: cartItems,
        name,
        phoneNumber,
        createdAt: new Date(),
      };
      await addDoc(orderCollection, order);
      console.log('Orden guardada en Firestore');
      setCartItems([]); // Limpiar el carrito después de la compra
    } catch (error) {
      console.error('Error finalizando la compra:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, productos, finalizePurchase }}>
      {children}
    </CartContext.Provider>
  );
};
