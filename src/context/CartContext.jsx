import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (newItem) => {
    const existingItem = cart.findIndex((item) => {
      item.id === newItem.id;
    });
    console.log(existingItem,'from cart context')
    setCart((prevState) => [...prevState, newItem]);
  };
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
