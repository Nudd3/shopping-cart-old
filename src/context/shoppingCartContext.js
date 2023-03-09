import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext({});

// This is a Custom Hook
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// A Provider that provides the values we need
// as well as do all the code for rendering the shopping cart

// Functions needed:
//  getItemQuantity
//  increaseCartQuantity
//  decreaseCartQuantity
//  removeFromCart
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Store the items

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      // If the item isn't already there, add it as a new one
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        // We have an item
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
