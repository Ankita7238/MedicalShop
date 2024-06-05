import React from 'react';

function CartItem({ item }) {
  return (
    <li>
      <div>{item.name}</div>
      <div>{item.desc}</div>
      <div>{item.price}</div>
      <input type="number" value={item.quantity} readOnly />
      <button>Add to Cart</button>
    </li>
  );
}

export default CartItem;
