import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id) => {
    setCartItems((prev) => [...prev, id]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((itemId) => itemId !== id));
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
