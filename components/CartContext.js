import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    // Check if item already exists
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
    }
}, []);

useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.map(item => ({
      id: item.id,
      quantity: item.quantity,
      // Add other relevant item properties here
    }))));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ items: cartItems, addItem, removeItem, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
