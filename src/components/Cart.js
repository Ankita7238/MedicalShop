import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import Modal from './Modal'

function Cart({ items, total, clearCart, cartOpen}) {
  return (
    <Modal setIsClose={cartOpen}>
    <div className="cart-container">
      <h2>Cart Items</h2>
      {!items.length ? <p>Nothing in the Cart. Add some items...</p>:
      (<>
      <ul className="cart-list">
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>
      <div className="cart-total">
      <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
      </>)}
      <button className="close-cart-button" onClick={()=>cartOpen(false)}>Close Cart</button>
    </div>
    </Modal>
  );
}

export default Cart;
