// MedicineList.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import './MedicineList.css';

function MedicineList({ medicines }) {
  return (
    <div className="medicine-list-container">
      <h2>Medicine List</h2>
      {medicines.length === 0 ? (
        <p>No medicines added to the list</p>
      ) : (
        <ul className="medicine-list">
          {medicines.map((medicine, index) => (
            <MedicineItem key={index} medicine={medicine} />
          ))}
        </ul>
      )}
    </div>
  );
}

function MedicineItem({ medicine }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState('');
  const [quantityPlaceholder, setQuantityPlaceholder] = useState('0');

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleQuantityFocus = () => {
    setQuantityPlaceholder('');
  };

  const handleQuantityBlur = () => {
    if (quantity === '') {
      setQuantityPlaceholder('0');
    }
  };

  const handleAddToCart = () => {
    const quantityValue = parseInt(quantity) || 0;
    addToCart({ ...medicine, quantity: quantityValue });
    setQuantity(''); // Reset quantity to an empty string
    setQuantityPlaceholder('0'); // Reset placeholder to '0'
  };

  return (
    <li className="medicine-item">
      <div className="medicine-info">
        <span className="medicine-name">{medicine.name}</span>
        <span className="medicine-desc">{medicine.desc}</span>
        <span className="medicine-price">Rs.{medicine.price}</span>
        <input
          type="number"
          className="quantity-input"
          value={quantity}
          placeholder={quantityPlaceholder}
          min="0"
          onChange={handleQuantityChange}
          onFocus={handleQuantityFocus}
          onBlur={handleQuantityBlur}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </li>
  );
}

export default MedicineList;
