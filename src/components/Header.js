import React from 'react';
import './Header.css';

function Header({ openCart, cartQuantity }) {
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
