import React, { useState } from 'react';
import Form from './components/Form';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToMedicines = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartTotal(cartTotal + item.price * item.quantity);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header openCart={toggleCart} />
      {isCartOpen && <Cart items={cartItems} total={cartTotal} clearCart={clearCart} />}
      <h1 style={{ textAlign: 'center' }}>Medicines Form</h1>
      <Form addToMedicines={addToMedicines} />
      {medicines.length>0 ? <MedicineList medicines={medicines} addToCart={addToCart} />: <p>No medicines are added yet.</p>}
    </div>
  );
}

export default App;
