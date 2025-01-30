// CustomItemContext.js
import React, { createContext, useEffect, useState } from 'react';

const itemContext = createContext();

function CustomItemContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Cart state
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load products from the backend 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Update the total price 
  useEffect(() => {
    const calculateTotalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(calculateTotalPrice);
    setItemsInCart(cart.length);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item._id !== product._id);
    setCart(updatedCart);
  };

  return (
    <itemContext.Provider
      value={{
        products,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        itemsInCart,
        setItemsInCart,
        totalPrice,
      }}
    >
      {children}
    </itemContext.Provider>
  );
}

export { itemContext };
export default CustomItemContext;

