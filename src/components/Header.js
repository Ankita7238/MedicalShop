// Header.js
import React from 'react';
import { useCart } from './CartContext';
import './Header.css';

function Header({ openCart }) {
  const { cartItems } = useCart();
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className='headerStyle'>
      <h1>Medical Shop Management</h1>
      <div className="cartContainerStyle">
        <button className='cartButtonStyle' onClick={openCart}>
          Cart
        </button>
        <span className="cart-badge">{cartQuantity}</span>
      </div>
    </header>
  );
}

export default Header;
