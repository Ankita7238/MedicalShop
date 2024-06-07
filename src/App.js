// App.js
import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './components/CartContext';
import Form from './components/Form';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToMedicines = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div>
        <Header openCart={toggleCart} />
        {isCartOpen && <Cart cartOpen={setIsCartOpen} />}
        <h1 style={{ textAlign: 'center' }}>Medicines</h1>
        <Form addToMedicines={addToMedicines} />
        <MedicineList medicines={medicines} />
      </div>
    </CartProvider>
  );
}

export default App;
