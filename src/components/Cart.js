import React from 'react';
import CartItem from './CartItem';

function Cart({ items, total, clearCart }) {
  return (
    <div>
      <button onClick={clearCart}>Clear Cart</button>
      <ul>
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>
      <div>Total: {total}</div>
    </div>
  );
}

export default Cart;
