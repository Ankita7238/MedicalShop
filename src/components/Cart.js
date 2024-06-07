// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import './Cart.css';
import Modal from './Modal';

function Cart({ cartOpen }) {
  const { cartItems, cartTotal, clearCart } = useCart();

  return (
    <Modal setIsClose={cartOpen}>
      <div className="cart-container">
        <h2>Cart Items</h2>
        {!cartItems.length ? (
          <p>Nothing in the Cart. Add some items...</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </ul>
            <div className="cart-total">
              <strong>Total: Rs.{cartTotal.toFixed(2)}</strong>
            </div>
            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
        <button className="close-cart-button" onClick={() => cartOpen(false)}>
          Close Cart
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
