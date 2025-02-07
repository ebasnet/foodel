import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1; // Decrease quantity by 1 if more than 1
      } else {
        delete updatedCart[itemId]; // Remove item if quantity is 1
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <StoreContext.Provider
      value={{ food_list, cartItems, addToCart, removeFromCart, setCartItems }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
