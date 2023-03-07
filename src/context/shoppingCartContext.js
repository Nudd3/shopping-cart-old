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
export const ShoppingCartProvider = ( { children } ) => {

  const [cartItems, setCardItems] = useState( [] ) // Store the items

  const cartQuantity = cartItems.length;

  return (
    <ShoppingCartContext.Provider value={{cartQuantity}}>
      { children }
    </ShoppingCartContext.Provider>
  )

}