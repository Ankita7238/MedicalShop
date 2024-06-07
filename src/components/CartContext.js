// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
        return {
          ...state,
          cartItems: updatedCartItems,
          cartTotal: state.cartTotal + action.payload.price * action.payload.quantity,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          cartTotal: state.cartTotal + action.payload.price * action.payload.quantity,
        };
      }

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        cartTotal: 0,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [], cartTotal: 0 });

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, cartTotal: state.cartTotal, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
