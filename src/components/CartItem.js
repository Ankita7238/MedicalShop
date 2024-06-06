import React from 'react';
import './CartItem.css';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <span className="cart-item-name">{item.name}</span>
      <div className="cart-item-grp">
      <span className="cart-item-price">Rs.{item.price}</span>
      <span className="cart-item-quantity"> x{item.quantity}</span>
      <span className="cart-item-total">{" = Rs."+(item.price * item.quantity).toFixed(2)}</span>
      </div>
      
    </div>
  );
}

export default CartItem;
