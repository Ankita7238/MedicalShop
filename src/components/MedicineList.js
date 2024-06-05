import React from 'react';

function MedicineList({ medicines, addToCart }) {
  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>
            <div>{medicine.name}</div>
            <div>{medicine.desc}</div>
            <div>{medicine.price}</div>
            <button onClick={() => addToCart({ ...medicine, quantity: 1 })}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;
